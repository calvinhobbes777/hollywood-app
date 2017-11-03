import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//import all files
class ListMovies extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      error: false
    };
  }
  //setting the state
  componentDidMount() {
    api.movies.getAll().then(movies => {
      if (!movies.length && movies.length !== 0) {
        console.log("no bueno", movies);
        movies = [];

        this.setState(state => {
          return {
            error: "No Bueno Movies"
          };
        });
      }

      this.setState(state => {
        return {
          movies: movies
        };
      });
    });
  }
  //when page loads get all movies
  render() {
    let { movies, error } = this.state;
    return (
      <div
        style={{
          background:
            'url("http://www.elpolitico.com/wp-content/uploads/2017/02/palomitas-de-maiz.jpg")',

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
        <h1>Movies</h1>
        <Link to={"/movies/new"} style={{ color: "#14FFF7", fontSize: 40 }}>
          New Movie?
        </Link>
        <br />
        <Link to={"/"} style={{ fontSize: 25 }}>
          Home
        </Link>
        <div>
          <hr />
        </div>
        {error && <div>{error}</div>}
        <ul>
          {movies.map(m => (
            <li
              key={m.id}
              style={{
                padding: 10,
                listStyleType: "none",

                fontSize: 40
              }}
            >
              <Link to={`/movies/${m.id}`} style={{ color: "#14FFF7" }}>
                {m.title} - {m.actors.length}Actor
                {m.actors.length === 1 ? "" : "s"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListMovies;
