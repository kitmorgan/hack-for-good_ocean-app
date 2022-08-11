import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, DatePicker, Form, Input, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

// export function

class postEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
      beach_id: "",
    };
  }
  PostEvent() {
    return (
      <Form {...layout} name="nest-messages">
        <Form.Item
          name="name"
          label="Beach Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            onChange={(e) => this.setState({ name: e.target.value })}
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="galvestonBeach">Galveston Beach</Option>
            <Option value="santaMonicaBeach">Santa Monica Beach</Option>
            <Option value="capeMayBeach">Cape May Beach</Option>
            <Option value="panamaCityBeach">Panama City Beach</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="DatePicker"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {" "}
          <DatePicker
            onChange={(e) => this.setState({ date: e.target.value })}
          />
        </Form.Item>

        <Form.Item name={["description"]} label="Description">
          <Input.TextArea
            onChange={(e) => this.setState({ description: e.target.value })}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onSubmit={this.postNewEvent}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }

  postNewEvent(name, description, beach_id) {
    const eventObject = {
      beach_id: 3,
      date: this.state.date,
      description: description,
      name: name,
    };
    console.log(eventObject);
    fetch("http://localhost:8080/create-event", {
      method: "POST",
      body: JSON.stringify(eventObject),
      headers: {
        "Content-type": "application/json;",
      },
      credentials: "same-origin",
    }).then((response) => {
      console.log(response.status);
    });
    console.log(eventObject);
  }
  onFinish = (values) => {
    console.log("Success:", values);
    this.postNewEvent(values.name, values.description, values.date);
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <h1> Plan Event</h1>
        <div>
          <Form {...layout} name="nest-messages" onFinish={this.onFinish}>
            <Form.Item
              name="name"
              label="Beach Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Select a option and change input text above"
                allowClear
              >
                <Option value="Galveston Beach">Galveston Beach</Option>
                <Option value="Santa Monica Beach">Santa Monica Beach</Option>
                <Option value="Cape May Beach">Cape May Beach</Option>
                <Option value="Panama City Beach">Panama City Beach</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="DatePicker"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              {" "}
              <DatePicker
                format="YYYY-MM-DD"
                onChange={(e, s) =>
                  this.setState({ date: s }, console.log(this.state.date))
                }
              />
            </Form.Item>

            <Form.Item name={["description"]} label="Description">
              <Input.TextArea
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <></>
      </>
    );
  }
}
export default withRouter(postEvent);
