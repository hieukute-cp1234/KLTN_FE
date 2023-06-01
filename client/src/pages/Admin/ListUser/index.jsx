import React from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import ButtonComon from "../../../components/common/Button";
import Layout from "../../../layouts";
import { listUser } from "../../../dataFake";
import "./user.scss";

const UsersPage = () => {
  const openModalEdit = () => {};
  const handleDeleteRole = () => {};
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      align: "center",
    },
    {
      title: "process by user",
      dataIndex: "processCreated",
      key: "processCreated",
      align: "center",
    },
    {
      title: "process used",
      dataIndex: "processUse",
      key: "processUse",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (role) => (
        <div className="role-actions">
          <ButtonComon
            text="Detail"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => openModalEdit(role)}
          />
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <Table columns={columns} dataSource={listUser} />
    </Layout>
  );
};

export default UsersPage;
