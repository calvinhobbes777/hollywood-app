import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//importing files
class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      actors: [],
      error: false,
      movie: {
        rating: "G"
      }
    };
  }
  //setting the state
  formSubmit = submitE => {
    let { movie } = this.state;
    let movieId = this.props.match.params.movieId;
    submitE.preventDefault();

    api.movies.update(movieId, movie).then(() => {
      this.props.history.push(`/movies/${movieId}`);
    });
  };
  //editing the movie when you submit the forms
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
  //using the values of the inputs
  addToCast = id => {
    let movieId = this.props.match.params.movieId;
    api.movies.addActor(movieId, { id: id }).then(() => {
      this.fetchMovieAndActors();
    });
  };
  //adding a cast member
  removeFromCast = id => {
    let movieId = this.props.match.params.movieId;
    api.movies.removeActor(movieId, { id: id }).then(() => {
      this.fetchMovieAndActors();
    });
  };
  //removing a cast member
  fetchMovieAndActors = () => {
    let movieId = this.props.match.params.movieId;

    api.movies.get(movieId).then(movie => {
      if (!movie.id) {
        console.log("No Bueno Movie Looking For", movie);
        movie = {};
        this.setState(state => {
          return {
            error: "No Bueno Movie"
          };
        });
      }
      this.setState(state => {
        return {
          movie: movie
        };
      });
      api.actors.getAll().then(actors => {
        if (!actors.length && actors.length !== 0) {
          return;
        }
        this.setState(state => {
          return {
            actors: actors
          };
        });
      });
    });
  };
  //fetching all movies and actors
  componentDidMount() {
    this.fetchMovieAndActors();
  }
  //when page loads get all
  render() {
    let { movie, actors } = this.state;
    return (
      <div
        style={{
          background:
            'url("http://getwallpapers.com/wallpaper/full/3/d/3/424519.jpg")',

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
        <h1 style={{ color: "#C9DCB3" }}>Edit {movie.title}</h1>
        <Link to={"/movies"} style={{ fontSize: 20 }}>
          Back
        </Link>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"title"}
            placeholder={"title"}
            onChange={this.inputChange}
            value={movie.title}
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
            value={movie.rottenTomatoes}
          />
          <input
            type="text"
            name={"poster"}
            placeholder={"poster"}
            onChange={this.inputChange}
            value={movie.poster}
          />
          <input
            type="text"
            name={"summary"}
            placeholder={"summary"}
            onChange={this.inputChange}
            value={movie.summary}
          />
          <input
            type="text"
            name={"genre"}
            placeholder={"genre"}
            onChange={this.inputChange}
            value={movie.genre}
          />
          <input type="submit" />
        </form>
        <hr />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {movie.actors &&
              movie.actors.map(a => (
                <div key={a.id} style={{ color: "#C9DCB3", padding: 5 }}>
                  {a.name} <br />
                  <button onClick={() => this.removeFromCast(a.id)}>
                    Fire
                  </button>
                </div>
              ))}
          </div>
          <div style={{ flex: 1 }}>
            {actors &&
              actors.map(a => (
                <div key={a.id} style={{ color: "#C9DCB3", padding: 5 }}>
                  {a.name} <br />
                  <button onClick={() => this.addToCast(a.id)}>Cast</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default EditMovie;
