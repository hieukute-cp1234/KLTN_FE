import React from "react";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import "./layout.scss";

const Header = ({ namePage }) => {
  const handleAddByPage = () => {};
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
