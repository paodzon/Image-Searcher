import React from "react";
import "./App.css";
import axios from 'axios';
import SearchBar from "./Search";


class App extends React.Component {

  state = {images: []};



  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params:{query:term},
      headers:{
        Authorization: 'Client-ID z4CkAiBSidUL0KgSnQfrChm8rgtDPoDGKY_XU3_8eLk'
      }
    })

    this.setState({images:response.data.results});
    console.log(this.state.images)
  };

  render() {
    return (
      <div className="App">
        <h1>Image Searcher</h1>
        {this.state.images.id}
        <SearchBar onSubmitInput={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
