import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, DatePicker, Form, Input, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

export function PostEvent() {
  return (
      <Form {...layout} name="nest-messages">
        <Form.Item
          name="name"
          label="Beach Name"
          rules={[
            {
              required: true
            },
          ]}>
          <Select
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
          ]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name={['description']} label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button 
          type="primary" 
          htmlType="submit"
          >
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
