import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

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
    key: "/admin",
    path: "/admin",
  },
  {
    icon: <UserOutlined />,
    label: "List Process",
    path: "/admin/process",
  },
  {
    icon: <UserOutlined />,
    label: "Role Process",
    path: "/admin/role",
  },
];

const MenuComponent = () => {
  const selectMenu = ({ key }) => {
    console.log("key", key);
  };

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
