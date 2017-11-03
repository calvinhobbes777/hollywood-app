import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
//importing files
class CreateActor extends Component {
  constructor() {
    super();

    this.state = {
      actor: {
        gender: "male",
        race: "white"
      }
    };
  }
  //setting our state
  formSubmit = submitE => {
    let { actor } = this.state;
    submitE.preventDefault();

    api.actors.create(actor).then(() => {
      this.props.history.push("/actors");
    });
  };
  //creating an actor when we submit
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
  //taking the value of the inputs
  render() {
    let { actor } = this.state;
    return (
      <div
        style={{
          background:
            'url("https://i.pinimg.com/736x/40/33/49/4033498eabeb3b3b77d18167d180f8a5--ppt-oscars.jpg")',

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
        <h1 style={{ color: "gold" }}>Create Actor</h1>
        <Link to={"/actors"} style={{ fontSize: 30 }}>
          Back
        </Link>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            name={"name"}
            placeholder={"name"}
            onChange={this.inputChange}
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
          />
          <input
            type="picture"
            name={"picture"}
            onChange={this.inputChange}
            placeholder={"picture"}
          />
          <textarea
            type="text"
            name={"topMovies"}
            onChange={this.inputChange}
            placeholder={"top movies"}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateActor;
