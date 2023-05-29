import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggleModalAddRole } from "../store/role";
import { toggleModalAddUser } from "../store/auth";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { ADMIN } from "../constants/routes";
import "./layout.scss";

const Header = ({ namePage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRole = !!useMatch(ADMIN.LIST_ROLE);
  const isUser = !!useMatch(ADMIN.LIST_USER);

  const handleAddByPage = () => {
    switch (true) {
      case isRole:
        dispatch(toggleModalAddRole(true));
        return;
      case isUser:
        dispatch(toggleModalAddUser(true));
        return;
      default:
        navigate(ADMIN.CREATE_PROCESS);
        return;
    }
  };

  return (
    <div className="ms-header">
      <div>{namePage}</div>
      <div className="ms-header__search">
        <Input placeholder="search..." beforeIcon={<SearchOutlined />} />
        <Button
          text="Add"
          classButton="ms-btn-create"
          beforeIcon={<PlusCircleOutlined />}
          click={handleAddByPage}
        />
      </div>
    </div>
  );
};

export default Header;
