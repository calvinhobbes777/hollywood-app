import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//importing all files
class ListActors extends Component {
  constructor() {
    super();

    this.state = {
      actors: [],
      error: false
    };
  }
  //setting the state
  componentDidMount() {
    api.actors.getAll().then(actors => {
      if (!actors.length && actors.length !== 0) {
        console.log("no bueno", actors);
        actors = [];

        this.setState(state => {
          return {
            error: "No Bueno Actors"
          };
        });
      }

      this.setState(state => {
        return {
          actors: actors
        };
      });
    });
  }
  //when page loads displays all actors
  render() {
    let { actors, error } = this.state;
    return (
      <div
        style={{
          background:
            'url("http://il2.picdn.net/shutterstock/videos/7542676/thumb/1.jpg?i10c=img.resize(height:160)")',

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
        <h1 style={{ color: "#F0F66E", fontSize: 50 }}>List Actors</h1>
        <Link to={"/actors/new"} style={{ color: "#F0F66E", fontSize: 35 }}>
          New Actor
        </Link>
        <br />
        <Link to={"/"} style={{ fontSize: 25 }}>
          Home
        </Link>
        <hr />

        {error && <div>{error}</div>}
        <ul>
          {actors.map(a => (
            <li key={a.id} style={{ padding: 10, listStyleType: "none" }}>
              <Link to={`/actors/${a.id}`} style={{ color: "#E4572E" }}>
                <img width={75} src={a.picture} alt="pic" />
                <br />
                {a.name} - {a.movies.length} Movie
                {a.movies.length === 1 ? "" : "s"}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListActors;
