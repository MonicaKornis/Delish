import React from 'react';
import {Link} from 'react-router-dom';
import RecipeIndexItem from './recipe_index_item';
import SessionFormContainer from '../session/session_form_container';
import RecipeFormContainer from '../recipe_form/recipe_form_container';
import { LastLocationProvider } from 'react-router-last-location';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class RecipeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike= this.handleLike.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.state = { recipeModalOpen: false };
    this.closeRecipeModal = this.closeRecipeModal.bind(this);
    this.openRecipeModal = this.openRecipeModal.bind(this);
    this.handleFeature = this.handleFeature.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  closeRecipeModal() {
    this.setState({recipeModalOpen: false});
  }

  openRecipeModal() {
    this.setState({recipeModalOpen: true});
    this.props.removeErrors();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount(){
    // let loc = JSON.stringify(this.props.lastLocation);
    window.scrollTo(0, 0);
    this.props.fetchRecipes();
  }

  handleImageClick(e,id) {
    if(this.props.currentUser !== undefined ) {
    this.props.history.push(`/recipes/${id}`);
    } else {
        this.props.history.push(`/login`);
    }
  }

  handleLike(recipeId){
    if(this.props.likedRecipes.includes(recipeId) && this.props.currentUser !== undefined ) {
      return (e) => {
        return this.props.unlikeRecipe(recipeId);
      };
    } else if (this.props.currentUser !== undefined ){
      return (e) => {
        return this.props.likeRecipe(recipeId);
      };
    }
  }

  handleColor(recipeId) {
    if(this.props.likedRecipes.includes(recipeId)) {
        return "red";
    } else {
      return "white";
    }
  }

  handleFeature(e) {
    e.preventDefault();

    let recipe = this.props.recipes.filter((recipe) => recipe.title.includes('Tumeric Tea'));

    if(this.props.currentUser !== undefined) {
    this.props.history.push(`/recipes/${recipe[0].id}`);
  } else {
    this.props.history.push('/login');
  }
  }


  render() {

    let recipeIndexHeader;
    let recipeIndexFooter;
    let recipeCount = this.props.recipes ? this.props.recipes.length : 0;
    let authoredCount = this.props.authoredRecipeIds ? this.props.authoredRecipeIds.length : 0;
    let authoredRecipes = this.props.authoredRecipes || [];
    let AuthoredRecipeItems = (<div></div>);
    let mainClass;
    let mainGrid;
    let containerId;

    if(this.props.match.path !== '/recipes/recipe-box') {
      mainGrid = 'gridWrapper';
      mainClass = 'flex-recipe-grid';
      // flexGrid = 'index-recipe-grid';
      containerId = 'main';
      recipeIndexHeader = (
      <div>
        <div className='image'>
          <img src={window.staticImages.featureImage}/>
          <div id='recipe-circle' onClick={this.handleFeature}>RECIPE <br/>OF THE DAY</div>
          <div id='recipe-title' onClick={this.handleFeature}>
            <h2>Tumeric Tea</h2>
            <div id='feature-description'>A flavorful drink to warm the <br/> body and soul.</div>
            <h3>Monica Kornis</h3>
          </div>
        </div>
        <br></br>
        <br></br>

          <div id='index-text-id'>
            <img src={window.staticImages.indexText}/>
            <p>RECIPES, GUIDES AND MORE FOR THE WEEK OF JANUARY 3RD</p>
          </div>

        </div>
      );
    } else {
      containerId = 'recipe-box-container';
      mainGrid = '';
      mainClass = 'recipe-box';
      recipeIndexHeader = (
        <div className='recipeBoxHeader'>
          <br></br>
          <br></br>
          <br></br>

          <h2 id='savedRecipes'>Your Saved Recipes </h2>
          <button id='modal-button' onClick={this.openRecipeModal}>Create A Recipe</button>
          <span id='savedRecipeCount'>{`${recipeCount} Saved Recipes`}</span>
        </div>
      );


      recipeIndexFooter = (
        <div className='recipeBoxHeader footer'>
          <br></br>
          <br></br>
          <br></br>
          <h2 id='savedRecipes'>Your Authored Recipes </h2>
          <span id='savedRecipeCount'>{`${authoredRecipes.length} Authored Recipes`}</span>
            <br></br>
            <br></br>


        </div>
      );

      AuthoredRecipeItems = (
        <div className={mainClass}>

          {
            this.props.authoredRecipes.map( (recipe,index) =>
              <RecipeIndexItem imageAction={(e) => this.handleImageClick(e,recipe.id)} currentUser={this.props.currentUser} author={recipe.author} recipe={recipe} key={index+1} id={recipe.id} action={this.handleLike} color={this.handleColor(recipe.id)}/>
            )
          }

        </div>
      );
    }


    return (

      <div className='recipeIndex' id={containerId}>


        {recipeIndexHeader}
        <br></br>
        <br></br>


            <Modal
              isOpen={this.state.recipeModalOpen}
              onRequestClose={this.closeRecipeModal}
              style={customStyles}>


             <RecipeFormContainer closeRecipeModal={this.closeRecipeModal}/>
            </Modal>

        <div className='index-header'>
        </div>

        <div id={mainGrid}>
            <div className={mainClass}>


              {
                this.props.recipes.map( (recipe,index) =>
                  <RecipeIndexItem imageAction={(e) => this.handleImageClick(e,recipe.id)} currentUser={this.props.currentUser} author={recipe.author} recipe={recipe} key={index+1} id={recipe.id} action={this.handleLike} color={this.handleColor(recipe.id)}/>
                )
              }
            </div>
          {recipeIndexFooter}

          <div className='index-header'>
          </div>

          <br></br>
          <br></br>

          {AuthoredRecipeItems}

            <br></br>
        </div>
      </div>
    );
  }
}

export default RecipeIndex;
