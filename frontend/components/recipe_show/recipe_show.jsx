import React from 'react';
import {Link} from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';
import CommentFormContainer from '../comments/comment_form_container';


class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonMessage: this.props.buttonMessage};
    this.handleLike = this.handleLike.bind(this);
    // this.handleCommentLike = this.handleCommentLike.bind(this);
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.recipeId);
    this.props.fetchRecipe(id);
  }

  componentWillReceiveProps(nextProps) {
    let nextId = nextProps.match.params.recipeId;
    if(nextId !== this.props.match.params.recipeId){
      this.props.fetchRecipe(nextProps.match.params.recipeId);
    }
  }

  handleLike(recipeId){
    if(this.props.likedRecipes.includes(recipeId)) {
      return (e) => {
        this.setState({ buttonMessage: 'Save To Recipe Box'});
        return this.props.unlikeRecipe(recipeId);
      };
    } else {
      return (e) => {
        this.setState({ buttonMessage: 'Saved'});
        return this.props.likeRecipe(recipeId);
      };
    }
  }




  render() {

    if (!this.props.recipe) return <div> </div>;

    let recipe = this.props.recipe;
    let ingredients = [];
    let steps = [];
    let buttonLabel = 'Save To Recipe Box';
    let author = this.props.recipe.author ? this.props.recipe.author : 'Anonymous';

    if(this.props.recipe) {
      ingredients = this.props.recipe.ingredients.map( (ingredient,idx) =>
      <li className='ingredient' key={idx}> <span id='quantity'> {`${ingredient.slice(0,3)}`}</span><span id='ingredient-name'>{`${ingredient.slice(3)}`}</span></li>
      );
    }

    if (recipe.steps) {
      steps = recipe.steps.map((step, idx) => (
        <div key={idx}>
          <li id='stepLabel'>Step {idx+1}</li>
          <li id='step'>{step}</li>
        </div>
      ));
    }


      return (

        <div className='recipeContainer'>
          <br></br>
            <br></br>
              <br></br>

          <header id="header-1">
        	 <a id="A_2">Easy</a>
        	<div id="div-3">
        		<h1 id="header-title">
        			{recipe.title}
        		</h1>
        	</div>

        	<div id="div-4">

            <div id='name'>
        		<h3 id="name-header">
        			 <a><span id="span-name">{author}</span></a>
        		</h3>
          </div>

        		<ul id="subHeader">
        			<li id="yield-and-servings">
        				 <span id="SPAN_11">Yield</span> <span id="SPAN_12"> 4 servings</span>
        			</li>
        			<li id="LI_13">
        			 <span id="SPAN_15">Time</span> <span id="SPAN_16">{`  ${recipe.cooking_time} minutes`}</span>
        			</li>
              <div id='saveButton'>
                <span onClick={this.handleLike(this.props.recipe.id)} id='recipeSave'>{this.state.buttonMessage}</span>
              </div>
        		</ul>



        	</div>
        </header>
          <div className='subHeader'>


                  <div id="DIV_1">
  	                 <div id="DIV_2">
                       <div id="recipeImage">
                         <img src={recipe.image_url} />
                       </div>

  		                 <p id="description">
  			                  {recipe.description}
  		                 </p>
  	                  </div>

                   </div>


          <div className="recipe-instructions">
            <div id='top-border'></div>
              <section className='recipe-ingredients-wrap'>
                <div className = "ingredients">
                  <h3 id='ingredientTitle'>INGREDIENTS</h3>
                    <ul className='recipe-ingredients'>
                      {ingredients}
                    </ul>
                </div>
              </section>

                <div className = "steps">
                  <h3 id='preparation'>PREPARATION</h3>
                    <ul>
                      {steps}
                    </ul>
                </div>
              </div>

              <div id='form-and-comments'>
              <section className="comments-container">
                <h3 id='cooking-notes'>Create A Note</h3>
                <section className='commentsSection'>
                  <CommentFormContainer recipeId={this.props.recipe.id} />
                </section>
              </section>

              <section id='index' className='commentsContainer'>
              <CommentIndexContainer commentIds={recipe.commentIds}/>
              </section>
              </div>
          </div>
        </div>
      );


  }
}

export default RecipeShow;

// <div className='recipe'>
//   <br></br>
//   <br></br>
//   <br></br>
//
// <header id='header-1'>
//    <a id="A_2">Easy</a>
//
//   <div id="div-3">
//     <h1 id='header-title'>{recipe.title}</h1>
//   </div>
//
//   <div id="div-4">
//   <h3 id='name-header'><span> By Monica Kornis</span></h3>
// </div>
