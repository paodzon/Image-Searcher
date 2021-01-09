import React from "react";
import "./App.css";
import unsplash from "../api/unsplash";
import SearchBar from "./Search";
import ImageList from "./ImageList";
import Pagination from './Pagination';
class App extends React.Component {
  state = { images: [], searched: "", total_page:1 };

  onSearchSubmit = async (term) => {

    if (term === "") {
      this.setState({
        images: [],
        searched: term,
        total_page: 1,
      });
    } else {
      const response = await unsplash.get("search/photos", {
        params: { query: term, page: 1, per_page: 20 },
      });

      this.setState({
        images: response.data.results,
        searched: term,
        total_page: response.data.total_pages,
      });
    }

    
  };
  onChangePage =  async (page) =>{
    const response = await unsplash.get("search/photos", {
      params: { query: this.state.searched, page: page ,per_page:20},
    });
    this.setState({images: response.data.results});

  }



  render() {
    return (
      <div className="App">
        <h1>Image Searcher</h1>
        {this.state.images.id}
        <SearchBar onSubmitInput={this.onSearchSubmit} />
        Found: {this.state.images.length}
        <Pagination onChangePage ={this.onChangePage} totalPage ={this.state.total_page}/>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
