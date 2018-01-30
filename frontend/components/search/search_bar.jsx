import React from 'react';
import SearchItem from './search_bar_item';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: '', searchResults: []};
    this.handleTyping = this.handleTyping.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.filterRecipes = this.filterRecipes.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleTyping(e) {
    this.setState({searchTerm: e.target.value});
    this.filterRecipes();
  }

  handleExit(e) {
    this.setState({searchTerm: ''});
  }

  filterRecipes() {
    this.setState({searchResults: this.props.recipes.filter((recipe) => recipe.title.includes(this.state.searchTerm))});
  }

  clearSearch(e) {
    this.setState({searchTerm: ''});
  }

  render() {
    let searchResults;
    if(this.state.searchTerm === '') {
      searchResults = [];
    } else {
      searchResults = this.state.searchResults.map((recipe,i) => {
        return <SearchItem classStr="search-result-item" clearSearch={this.clearSearch}
          recipe={recipe} key={recipe.id} index={i} history={this.props.history}/>;
        }
      );
      searchResults = searchResults.slice(0,6);
    }

    return (
     <section className='search-bar'>
       <form autocomplete="off">
         <input id='search-input' type="text" placeholder="What would you like to cook?"
           onChange={this.handleTyping} value={this.state.searchTerm} />
         <i></i>
       </form>
       <ul className="search-dropdown">
         {searchResults}
       </ul>
     </section>
   );
  }
}

export default SearchBar;

// onMouseLeave={this.handleExit}

// this.handleSubmit = this.handleSubmit.bind(this);
