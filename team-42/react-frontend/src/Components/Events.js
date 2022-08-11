import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import { Layout, Typography, Row, Col, Avatar, Card } from "antd";

const { Text, Title } = Typography;

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
    const eventMap = this.state.events.map((event, i) => {
      console.log(event);

      return (
        <>
          <Col xs={24} sm={12} lg={8} key={i}></Col>
          <Card hoverable>
            <div>
              <Title level={4}>{event.name}</Title>
              <img
                width={200}
                src="https://assets1.cbsnewsstatic.com/hub/i/r/2011/06/29/441f00d4-a643-11e2-a3f0-029118418759/thumbnail/620x465/3c495022ddcdaa44c93a4b4bf871958f/dirtybeach_istock_000015037586.jpg"
                alt={"dirty beach"}
              />
            </div>
            <p>{event.description}</p>
            <div>
              <div>
                <Text>{event.date} </Text>
              </div>
              <Text>{event.name}</Text>
            </div>{" "}
          </Card>
        </>
      );

      //   );
    });
    return (
      <>
        <h1> Active Events</h1>
        <div>
          <Row gutter={[32, 32]}>
            <div>{eventMap}</div>
          </Row>
        </div>
      </>
    );
  }
}
export default withRouter(Events);
