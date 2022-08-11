import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";

const { Text, Title } = Typography;

export function EventCard() {
  return (
    <Card hoverable>
      <div>
        <Title level={4}>Beach</Title>
        <img
          width={200}
          src={
            "https://assets1.cbsnewsstatic.com/hub/i/r/2011/06/29/441f00d4-a643-11e2-a3f0-029118418759/thumbnail/620x465/3c495022ddcdaa44c93a4b4bf871958f/dirtybeach_istock_000015037586.jpg"
          }
          alt={"dirty beach"}
        />
      </div>
      <p>brief description</p>
      <div>
        <div>
          <Text>dirty </Text>
        </div>
        <Text>Miami</Text>
      </div>{" "}
    </Card>
  );
}

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/events")
      .then((res) => res.json())
      .then((res) => this.setState({ events: res }));
  }

  render() {
    console.log(this.state.events);
    return (
      <>
        <h1> test test</h1>
        <div>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex temporibus
          neque ipsa asperiores voluptatibus quis eveniet voluptatum, error vero
          eos totam aliquam quibusdam, porro consequatur expedita delectus
          reiciendis velit non.
          <EventCard />
        </div>
      </>
    );
  }
}
export default withRouter(Events);
