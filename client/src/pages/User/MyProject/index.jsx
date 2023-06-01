import React, { useState } from "react";
import { Table, Modal, Form, Input, Button, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import ButtonComon from "../../../components/common/Button";
import { listProject } from "../../../dataFake";
import "./my-project.scss";

const PageMyProject = () => {
  const [isEdit, setEdit] = useState(false);
  const [toggleAddProject, setAddProject] = useState(false);

  const openModalEdit = () => {
    setEdit(true);
    setAddProject(true);
  };

  const handelClose = () => {
    setEdit(false);
    setAddProject(false);
  };

  const handleDeleteRole = () => {
    Swal.fire({
      icon: "question",
      text: "Bạn có chắc chắn xóa!",
      showCancelButton: true,
    });
  };

  const optionLevels = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Start",
      dataIndex: "startDate",
      key: "startDate",
      align: "center",
    },
    {
      title: "End",
      dataIndex: "endDate",
      key: "enđate",
      align: "center",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "20%",
      render: (role) => (
        <div className="role-actions">
          <ButtonComon
            text="Edit"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => openModalEdit(role)}
          />
          <ButtonComon
            text="Delete"
            classButton="ms-btn-delete"
            afterIcon={<DeleteOutlined />}
            click={() => handleDeleteRole(role.id)}
          />
        </div>
      ),
    },
  ];

  const handleSubmit = (value) => {};

  return (
    <Layout>
      <Table columns={columns} dataSource={listProject} />
      <Modal
        title={`${isEdit ? "Update" : "Create"} role`}
        footer={null}
        open={toggleAddProject}
        onCancel={handelClose}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Name"
            name="role_name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Role name..." />
          </Form.Item>

          <Form.Item
            label="Description"
            name="role_description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input.TextArea
              className="custom-area"
              rows={4}
              placeholder="Description by role..."
              maxLength={252}
              style={{
                resize: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Level"
            name="level"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Select options={optionLevels} defaultValue={1} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: 10 }}
              onClick={handelClose}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default PageMyProject;
