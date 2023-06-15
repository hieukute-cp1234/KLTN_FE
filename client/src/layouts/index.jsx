import React, { useEffect } from "react";
import { Layout, Dropdown } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../store/auth/actions";
import { clearToken } from "../store/auth";
import Menu from "./Menu";
import Header from "./Header";
import "./layout.scss";

const { Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const getAvatar = (name) => {
    return name ? name[0] : "";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearToken());
    navigate("/login");
  };

  const menuUser = [
    {
      label: <NavLink to="">{user?.email || ""}</NavLink>,
      key: 0,
    },
    {
      label: <NavLink to="">Profile</NavLink>,
      key: 1,
    },
    {
      label: <span onClick={handleLogout}>logout</span>,
      key: 2,
    },
  ];

  return (
    <Layout className="ms-layout">
      <Sider trigger={null} collapsible>
        <div className="ms-layout__user">
          <div className="ms-layout__user__avatar">
            {getAvatar(user?.userName)}
          </div>
          <div>
            <Dropdown
              menu={{ items: menuUser }}
              trigger={["click"]}
              placement="bottom"
            >
              <span className="ms-layout__user__menu">{user?.userName}</span>
            </Dropdown>
          </div>
        </div>
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <Header namePage />
        <Content className="ms-layout__content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
