import React from "react";
import { NavLink } from "react-router-dom";
import { Table } from "antd";
import "./detail.scss";

const ListMember = (props) => {
  const { members } = props;
  const column = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
      width: "20%",
      render: (email) => <NavLink to="">{email}</NavLink>,
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      width: "20%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
      width: "20%",
      render: (role) => <div>{role.code}</div>,
    },
  ];
  return (
    <div className="list-member">
      <Table columns={column} dataSource={members} />
    </div>
  );
};

export default ListMember;
