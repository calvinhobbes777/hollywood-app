import React, { Component } from "react";
import api from "../api";

class CreateMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: {}
    };
  }
  formSubmit = submitE => {
    let { movie } = this.state;
    submitE.preventDefault();

    api.movies.create(movie).then(() => {
      this.props.history.push("/movies");
    });
  };

  inputChange = changeE => {
    changeE.persist();
    let name = changeE.target.name;
    let value = changeE.target.value;

    this.setState(state => {
      return {
        movie: {
          ...state.movie,
          [name]: value
        }
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Create Movie</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"title"}
            placeholder={"title"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"rating"}
            placeholder={"rating"}
            onChange={this.inputChange}
          />
          <input
            min={0}
            max={100}
            type="number"
            name={"rottenTomatoes"}
            onChange={this.inputChange}
            placeholder={"rotten tomatoes"}
          />
          <input
            type="text"
            name={"poster"}
            placeholder={"poster"}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name={"summary"}
            placeholder={"summary"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateMovie;
