import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { ADMIN } from "../constants/routes";
import "./layout.scss";

const Header = ({ namePage }) => {
  const navigate = useNavigate();

  const handleAddByPage = () => {
    navigate(ADMIN.CREATE_PROCESS);
  };

  return (
    <div className="ms-header">
      <div>{namePage}</div>
      <div className="ms-header__search">
        <Input placeholder="search..." beforeIcon={<SearchOutlined />} />
        <Button
          text="Create Process"
          classButton="ms-btn-create"
          beforeIcon={<PlusCircleOutlined />}
          click={handleAddByPage}
        />
      </div>
    </div>
  );
};

export default Header;
