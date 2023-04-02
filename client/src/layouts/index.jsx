import React from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import Header from "./Header";
import "./layout.scss";

const { Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  return (
    <Layout className="ms-layout">
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
