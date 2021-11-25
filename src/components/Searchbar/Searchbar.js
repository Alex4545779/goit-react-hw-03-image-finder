import React, { Component } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Searchbar.css";

export default class Searchbar extends Component {
  state = {
    imageSearch: "",
  };
  handleNameChange = (event) => {
    this.setState({ imageSearch: event.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = (event) => {
    event.preventDefault();
    if (this.state.imageSearch.trim() === "") {
      toast("Введите Ваш запрос");
      return;
    }
    this.props.onSubmit(this.state.imageSearch);
    this.setState({ imageSearch: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.props.onSubmit} className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.hendleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            name="imageSearch"
            value={this.state.imageSearch}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  imageSearch: PropTypes.string,
};
