import React from "react";
import { Table } from "antd";
import Layout from "../../../layouts";
import { roleList } from "../../../dataFake";
import "./user.scss";

const UsersPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "25%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "20%",
    },
  ];

  return (
    <Layout>
      <Table columns={columns} dataSource={roleList} />
    </Layout>
  );
};

export default UsersPage;
