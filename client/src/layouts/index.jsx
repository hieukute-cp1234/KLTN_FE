import React from "react";
import { Layout, Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import Header from "./Header";
import "./layout.scss";

const { Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  const getAvatar = (name) => {
    return name[0];
  }

  const menuUser = [
    {
      label: <NavLink to="">Profile</NavLink>,
      key: 0,
    },
    {
      label: <NavLink to="">logout</NavLink>,
      key: 1,
    },
  ];

  return (
    <Layout className="ms-layout">
      <Sider trigger={null} collapsible>
        <div className="ms-layout__user">
          <div className="ms-layout__user__avatar">{getAvatar('hieukute')}</div>
          <div>
            <Dropdown
              menu={{ items: menuUser }}
              trigger={["click"]}
              placement="bottom"
            >
              <span className="ms-layout__user__menu">hieukute</span>
            </Dropdown>
          </div>
        </div>
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <Header namePage/>
        <Content className="ms-layout__content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
