import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";

class postEvent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h1> Plan Event</h1>
        <div>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus
          neque ipsa asperiores voluptatibus quis eveniet voluptatum, error vero
          eos totam aliquam quibusdam, porro consequatur expedita delectus
          reiciendis velit non.
        </div>
      </>
    );
  }
}
export default withRouter(postEvent);
