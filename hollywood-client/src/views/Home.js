import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          background:
            'url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1728881.jpg")',

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
        <h1>Movies & Actors</h1>
        <Link to={"/movies"} style={{ fontSize: 30 }}>
          Movie List
        </Link>
        <br />
        <Link to={"/actors"} style={{ fontSize: 30 }}>
          Actor List
        </Link>
      </div>
    );
  }
}
export default Home;
