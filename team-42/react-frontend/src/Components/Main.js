import { Layout, Menu } from "antd";
import React from "react";
import Events from "../Components/Events";
import postEvent from "../Components/postEvent";
import Home from "../Components/Home";
import Donate from "../Components/Donate";

import { Switch, Route, Redirect, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const Main = () => (
  <>
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <NavLink to="/home"> Home </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/plan"> Organize Cleanup </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/events"> Events </NavLink>
          </Menu.Item>
          <Menu.Item key="4" style={{ marginLeft: "auto" }}>
            <NavLink to="/donate"> Donate </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      ></Content>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {" "}
        Life Underwater
      </h1>
    </Layout>
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/plan" component={postEvent}></Route>
      <Route path="/events" component={Events}></Route>{" "}
      <Route path="/donate" component={Donate}></Route>{" "}
    </Switch>
  </>
);

export default withRouter(Main);
