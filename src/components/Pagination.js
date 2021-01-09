import React from "react";
import "./Pagination.css";

class Pagination extends React.Component {

  state = { pagination: 1 };

  paginationPrev = () => {
    if (this.state.pagination === 1) {
      this.setState({ pagination: 1 });
      this.props.onChangePage(1);
    } else {
      const pageNumber = this.state.pagination - 1;
      this.setState({ pagination: pageNumber });
      this.props.onChangePage(pageNumber);
    }
  };

  paginationNext = () => {
    if (this.state.pagination === this.props.totalPage) {
      this.setState({ pagination: this.state.pagination });
    } else if (this.state.searched === "") {
      this.setState({ pagination: 1 });
    } else {
      this.setState({ pagination: this.state.pagination + 1 });
      const pageNumber = this.state.pagination + 1;
      this.props.onChangePage(pageNumber);
    }
  };

  render() {
    return (
      <div className="pagination">
        <button onClick={this.paginationPrev}>Previous</button>
        <span>{this.state.pagination} of {this.props.totalPage}</span>
        <button onClick={this.paginationNext}>Next</button>
      </div>
    );
  }
}

export default Pagination;
