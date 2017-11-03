import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//importing files
class ActorDetails extends Component {
  constructor() {
    super();

    this.state = {
      actor: {},
      error: false
    };
  }
  //making our state
  componentDidMount() {
    let actorId = this.props.match.params.actorId;

    api.actors.get(actorId).then(actor => {
      if (!actor.id) {
        console.log("No Bueno actor Looking For", actor);
        actor = {};
        this.setState(state => {
          return {
            error: "No Bueno actor"
          };
        });
      }
      this.setState(state => {
        return {
          actor: actor
        };
      });
    });
  }
  //when page loads get the actor with specific id if no id then error
  render() {
    let { error, actor } = this.state;
    return (
      <div
        style={{
          background:
            'url("http://lightingthevoid.com/wp-content/uploads/2014/08/badass-background.jpg")',

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
        <h1 style={{ color: "#C6CA53" }}>Actor Details</h1>
        {error && <div>{error}</div>}
        {!error && (
          <div>
            <Link to={`/actors/${actor.id}/edit`}>Edit</Link>
            <br />
            <Link to={`/actors`}>Back</Link>
            <h2 style={{ color: "#C6CA53" }}>{actor.name}</h2>
            <img width={200} src={actor.picture} alt="pic" />
            <div style={{ color: "#C6CA53", fontSize: 20 }}>
              Gender: {actor.gender}
            </div>
            <div style={{ color: "#C6CA53", fontSize: 20 }}>
              Age: {actor.age}
            </div>
            <div style={{ color: "#C6CA53", fontSize: 20 }}>
              Race: {actor.race}
            </div>
            <div style={{ color: "#C6CA53", fontSize: 20 }}>
              Top Movies: {actor.topMovies}
            </div>
            <hr />
            {actor.movies &&
              actor.movies.map(m => (
                <div>
                  <Link to={`/movies/${m.id}`}>{m.title}</Link>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
} //displaying all the info
export default ActorDetails;
