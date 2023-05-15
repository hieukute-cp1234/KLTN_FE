import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { ADMIN } from "../constants/routes";

const MENU = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Inbox",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "My issues",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Views",
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "Roadmaps",
  },
];

const MENU_ADMIN = [
  {
    icon: <UserOutlined />,
    label: "Dashboard",
    key: ADMIN.DASHBOARD,
    path: ADMIN.DASHBOARD,
  },
  {
    icon: <UserOutlined />,
    label: "List Process",
    key: ADMIN.PROCESS,
    path: ADMIN.PROCESS,
  },
  {
    icon: <UserOutlined />,
    label: "Role Process",
    key: ADMIN.LIST_ROLE,
    path: ADMIN.LIST_ROLE,
  },
  {
    icon: <FilePdfOutlined />,
    label: "Workflow",
    key: ADMIN.WORKFLOW,
    path: ADMIN.WORKFLOW,
  },
  {
    icon: <UserOutlined />,
    label: "Users",
    key: ADMIN.LIST_USER,
    path: ADMIN.LIST_USER,
  },
];

const MenuComponent = () => {
  const selectMenu = ({ key }) => {};

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["/admin"]}
      onSelect={selectMenu}
    >
      {MENU_ADMIN.map((menuItem) => (
        <Menu.Item
          className="menu-item"
          key={menuItem.path}
          icon={menuItem.icon}
        >
          <NavLink className="nav-link" to={menuItem.path}>
            {menuItem.label}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuComponent;
