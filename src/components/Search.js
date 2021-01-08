import React from "react";
import "./Search.css";
import { InputGroup, Input } from "reactstrap";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmitInput(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onFormSubmit}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Search Image"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;
