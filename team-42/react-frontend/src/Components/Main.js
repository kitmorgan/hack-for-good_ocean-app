import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import Events from "../Components/Events";
import { Switch, Route, Redirect, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const Main = () => (
  <>
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="2">Home</Menu.Item>
          <Menu.Item key="3">Organize Cleanup</Menu.Item>
          <Menu.Item key="1">
            <NavLink to="/events"> Events </NavLink>
          </Menu.Item>
          <Menu.Item key="4" style={{ marginLeft: "auto" }}>
            Logout
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia in
        doloremque quidem nihil recusandae quia repellat unde assumenda vero
        error tempore perferendis, cupiditate fugit quasi. Iusto laudantium odio
        nesciunt accusantium.
      </div>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Life Underwater Created for Chase Hack For Good
      </Footer>
    </Layout>
    <Switch>
      <Route path="/events" component={Events}></Route>{" "}
    </Switch>
  </>
);

export default withRouter(Main);
