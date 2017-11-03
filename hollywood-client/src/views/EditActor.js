import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//importing all files
class EditActor extends Component {
  constructor() {
    super();

    this.state = {
      actor: {
        gender: "male",
        race: "white"
      }
    };
  }
  //setting the state
  formSubmit = submitE => {
    submitE.preventDefault();
    let { actor } = this.state;
    let actorId = this.props.match.params.actorId;

    api.actors.update(actorId, actor).then(() => {
      this.props.history.push(`/actors/${actorId}`);
    });
  };
  //updating the actor with the new values
  inputChange = changeE => {
    changeE.persist();

    let name = changeE.target.name;
    let value = changeE.target.value;

    this.setState(state => {
      return {
        actor: {
          ...state.actor,
          [name]: value
        }
      };
    });
  };

  componentDidMount() {
    let actorId = this.props.match.params.actorId;

    api.actors.get(actorId).then(actor => {
      if (!actor.id) {
        console.log("No Bueno Actor", actor);
        actor = {};
        this.setState(state => {
          return {
            error: "No Bueno Actor"
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
  //populating the inputs with old value if no id then throws error
  render() {
    let { actor } = this.state;
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
        <h1 style={{ color: "#C9DCB3" }}>Edit {actor.name}</h1>
        <Link to={"/actors"} style={{ fontSize: 20 }}>
          Back
        </Link>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"name"}
            placeholder={"name"}
            onChange={this.inputChange}
            value={actor.name}
          />
          <input
            type="picture"
            name={"picture"}
            onChange={this.inputChange}
            placeholder={"picture"}
            value={actor.picture}
          />
          <select
            name="race"
            value={actor.race}
            required
            onChange={this.inputChange}
          >
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="yellow">Yellow</option>
            <option value="other">Other</option>
          </select>
          <select
            value={actor.gender}
            name="gender"
            required
            onChange={this.inputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="it">It</option>
          </select>
          <input
            type="number"
            name={"age"}
            onChange={this.inputChange}
            placeholder={"age"}
            value={actor.age}
          />
          <textarea
            type="text"
            name={"topMovies"}
            onChange={this.inputChange}
            placeholder={"top movies"}
            value={actor.topMovies}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditActor;
