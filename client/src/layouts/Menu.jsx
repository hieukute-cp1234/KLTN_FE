import React from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
    key: "/admin/process",
  },
  {
    icon: <UserOutlined />,
    label: "Role Process",
    key: "/admin/role",
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
      items={MENU_ADMIN}
      onSelect={selectMenu}
    />
  );
};

export default MenuComponent;
