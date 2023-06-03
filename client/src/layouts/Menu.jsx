import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADMIN, USER } from "../constants/routes";

const MENU_ADMIN = [
  {
    icon: <UserOutlined />,
    label: "Dashboard",
    key: ADMIN.DASHBOARD,
    path: ADMIN.DASHBOARD,
    role: [1],
  },
  {
    icon: <UserOutlined />,
    label: "List Process",
    key: ADMIN.PROCESS,
    path: ADMIN.PROCESS,
    role: [1],
  },
  {
    icon: <UserOutlined />,
    label: "Role Process",
    key: ADMIN.LIST_ROLE,
    path: ADMIN.LIST_ROLE,
    role: [1],
  },
  {
    icon: <UserOutlined />,
    label: "Users",
    key: ADMIN.LIST_USER,
    path: ADMIN.LIST_USER,
    role: [1, 2],
  },
  {
    icon: <UserOutlined />,
    label: "My Project",
    key: USER.MY_PROJECT,
    path: USER.MY_PROJECT,
    role: [1, 2],
  },
];

const MenuComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const selectMenu = ({ key }) => {};
  const location = useLocation();

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={location.pathname}
      onSelect={selectMenu}
    >
      {MENU_ADMIN.map(
        (menuItem) => (
          <Menu.Item
            className="menu-item"
            key={menuItem.path}
            icon={menuItem.icon}
          >
            <NavLink className="nav-link" to={menuItem.path}>
              {menuItem.label}
            </NavLink>
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default MenuComponent;
