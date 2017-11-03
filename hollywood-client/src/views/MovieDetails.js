import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//imorting files
class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      error: false
    };
  }
  //setting the state
  componentDidMount() {
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
    });
  }
  //on load gets the movie
  render() {
    let { movie, error } = this.state;
    return (
      <div
        style={{
          background:
            'url("https://i.ytimg.com/vi/ifVEMkQ9BaY/maxresdefault.jpg")',

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
        <h1 style={{ color: "#CCD5FF", fontSize: 50 }}>Movie Details</h1>
        {error && <div>{error}</div>}
        {!error && (
          <div>
            <Link to={`/movies/${movie.id}/edit`} style={{ fontSize: 35 }}>
              Edit
            </Link>
            <br />
            <Link to={`/movies`} style={{ fontSize: 25 }}>
              Back
            </Link>
            <h2 style={{ color: "#CCD5FF" }}>{movie.title}</h2>
            <img src={movie.poster} alt="POSTER" width={200} />
            <div style={{ color: "#C6CA53", fontSize: 20 }}>
              {movie.genre} <br />
              <span>Rating: {movie.rating}</span>
              <br />
              <span>Rotten Tomatoes:{movie.rottenTomatoes}</span>
            </div>
            <p style={{ color: "#C6CA53" }}>{movie.summary}</p>
            <hr />
            {movie.actors &&
              movie.actors.map(actor => (
                <div>
                  <Link to={`/actors/${actor.id}`}>{actor.name}</Link>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}
export default MovieDetails;
