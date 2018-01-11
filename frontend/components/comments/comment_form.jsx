import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Title', body: 'Body', recipe_id: this.props.recipeId};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ title: 'Title', body: 'Body', recipe_id: this.props.recipeId});
  }

  update(field) {
    return (e) => ( this.setState({[field]: e.target.value}) );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>
          <input id='input' type='text' onChange={this.update('title')} value={this.state.title}/>
          </h3>

          <h3>
          <textarea id='input' onChange={this.update('body')} value={this.state.body}/>
          </h3>


          <input className='form-button' id='input' type='submit' value="Create Comment"/>
        </form>
      </div>
    );
  }

}

export default CommentForm;
