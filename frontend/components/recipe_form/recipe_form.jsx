import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '',
                  cooking_time: '', ingredients: '',
                  steps: '', imageFile: null, imageUrl: null
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {

    let formData = new FormData();
    let ingredients = this.state.ingredients.split(' ');
    let steps = this.state.steps.split('.');

    for (let i = 0; i < ingredients.length; i++) {
      formData.append('recipe[ingredients][]', ingredients[i]);
    }

    for (let i = 0; i < steps.length; i++) {
      formData.append('recipe[steps][]', steps[i]);
    }


    formData.append('recipe[title]', this.state.title);
    formData.append('recipe[description]', this.state.description);
    formData.append('recipe[cooking_time]', parseInt(this.state.cookingTime));
    formData.append('recipe[image]', this.state.imageFile);
    // formData.append('recipe[ingredients]', this.state.ingredients.split(' '));
    // formData.append('recipe[steps]', this.state.steps.split('.'));
    this.props.createRecipe(formData).then( () => this.props.closeModal());
    }

  update(field){
    return (e) => {this.setState({[field]: e.target.value});};
  }

  updateFile(e) {
    let file  = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend  = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div id='modal-container'>
        <h2 id='savedRecipes'> Submit A Recipe! </h2>
        <form onSubmit={this.handleSubmit} >
          <h3>
            <input id='input' type='text' placeholder='Title' onChange={this.update('title')} value={this.state.title}/>
          </h3>

          <h3>
            <textarea id='input'  placeholder='Description' onChange={this.update('description')} value={this.state.description}/>
          </h3>

          <h3>
            <input id='input' placeholder='Cooking Time' onChange={this.update('cooking_time')} value={this.state.cooking_time}/>
          </h3>

          <h3>
            <input id='input' placeholder='Ingredients' onChange={this.update('ingredients')} value={this.state.ingredients}/>
          </h3>

          <h3>
            <input id='input' placeholder='Steps' onChange={this.update('steps')} value={this.state.steps}/>
          </h3>

          <h3 id='upload-image'> Upload An Image
            <input type='file' onChange={this.updateFile}/>
          </h3>

          <input className='form-button' id='input' type='submit' value="Create Recipe"/>
        </form>
      </div>
    );
  }

}

export default RecipeForm;
