import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
/*import './index.css';*/
import { Button, DatePicker, Form, Input } from 'antd';

export function PostEvent() {
  return (
      <Form name="nest-messages">
        <Form.Item
          name={['user', 'name']}
          label="Beach Name"
          rules={[
            {
              required: true
            },
          ]}>
          <Input />
        </Form.Item>
    
        <Form.Item 
          label="DatePicker"
          rules={[
            {
              required: true,
            },
          ]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name={['description']} label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
  );
  }

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
          <PostEvent />
        </div>
        <></>
      </>
    );
  }
}
export default withRouter(postEvent);
