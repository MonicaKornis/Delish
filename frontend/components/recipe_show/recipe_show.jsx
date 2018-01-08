import React from 'react';
import {Link} from 'react-router-dom';


class RecipeShow extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    // debugger
    let recipe = this.props.recipe;
    let ingredients = [];
    let steps = [];

    if(this.props.recipe) {
      ingredients = this.props.recipe.ingredients.map( (ingredient,idx) =>
      <li key={idx}>{`${idx+1}: ${ingredient}`}</li>
      );
    }

    if (recipe.steps) {
      steps = recipe.steps.map((step, idx) => (
        <div key={idx}>
          <li>Step {idx+1}</li>
          <li>{step}</li>
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
        			 <a><span id="span-name">Monica Kornis</span></a>
        		</h3>
          </div>

        		<ul id="subHeader">
        			<li id="yield-and-servings">
        				 <span id="SPAN_11">Yield</span> <span id="SPAN_12"> 4 servings</span>
        			</li>
        			<li id="LI_13">
        			 <span id="SPAN_15">Time</span> <span id="SPAN_16">{`  ${recipe.cooking_time} minutes`}</span>
        			</li>
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


              <section className="recipe-instructions">
                <div className = "ingredients">
                  <h3>INGREDIENTS</h3>
                    <ul >
                      {ingredients}
                    </ul>
                </div>
                <div className = "steps">
                  <h3>PREPARATION</h3>
                    <ul >
                      {steps}
                    </ul>
                </div>
              </section>

              <section className="comments-container">
                <h3>Cooking Notes</h3>
                <section className='commentsSection'>

                </section>
              </section>
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
