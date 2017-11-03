import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//import all files
class CreateMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: {
        rating: "G"
      }
    };
  }
  //setting the state
  formSubmit = submitE => {
    let { movie } = this.state;
    submitE.preventDefault();

    api.movies.create(movie).then(() => {
      this.props.history.push("/movies");
    });
  };
  //creating a movie on submit
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
  //using the value of inputs
  render() {
    let { movie } = this.state;
    return (
      <div
        style={{
          background:
            'url("http://www.pptbackgrounds.org/uploads/film-movies-movie-making-minimalism-creative-backgrounds-wallpapers.jpg")',

          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "black",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <h1>Create Movie</h1>
        <Link to={"/movies"} style={{ fontSize: 30, color: "black" }}>
          Back
        </Link>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"title"}
            placeholder={"title"}
            onChange={this.inputChange}
          />
          <select
            value={movie.rating}
            name="rating"
            required
            onChange={this.inputChange}
          >
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
            <option value="NR">NR</option>
          </select>
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
          <input
            type="text"
            name={"genre"}
            placeholder={"genre"}
            onChange={this.inputChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateMovie;
