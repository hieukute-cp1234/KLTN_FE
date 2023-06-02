import React, { useState } from "react";
import {
  Table,
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  AutoComplete,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import Layout from "../../../layouts";
import ButtonComon from "../../../components/common/Button";
import { listProject } from "../../../dataFake";
import { USER } from "../../../constants/routes";
import "./my-project.scss";

const PageMyProject = () => {
  const [isEdit, setEdit] = useState(false);
  const [toggleAddProject, setAddProject] = useState(false);
  const [toggleDropWorkflow, setToggleDropWorkflow] = useState(false);

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

  const previewWorkflow = (value) => {
    console.timeLog(value);
  };

  const renderItemWorkflow = (value) => {
    return (
      <div>
        {value} <button onClick={() => previewWorkflow(value)}>click</button>
      </div>
    );
  };

  const optionWorkflow = [
    {
      label: renderItemWorkflow("hieu"),
    },
    {
      label: renderItemWorkflow("hieu2"),
    },
    {
      label: renderItemWorkflow("hieu3"),
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "20%",
      render: (name, data) => (
        <NavLink to={`${USER.MY_PROJECT}/${data.id}`}>{name}</NavLink>
      ),
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
        title={`${isEdit ? "Update" : "Create"} process`}
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
            name="project_name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="project name..." />
          </Form.Item>

          <Form.Item
            label="Description"
            name="project_description"
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
              placeholder="Description by project..."
              maxLength={252}
              style={{
                resize: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Member"
            name="member"
            rules={[
              {
                required: true,
                message: "Please input your user!",
              },
            ]}
          >
            <Select mode="multiple" options={optionLevels} defaultValue={1} />
          </Form.Item>

          <Form.Item
            label="Process"
            name="member"
            rules={[
              {
                required: true,
                message: "Please input your user!",
              },
            ]}
          >
            <AutoComplete
              options={optionWorkflow}
              placeholder="try to type `b`"
              onDropdownVisibleChange={() => {
                setToggleDropWorkflow(true);
              }}
            />
          </Form.Item>

          <Form.Item
            label="End Date"
            name="end_date"
            rules={[
              {
                required: true,
                message: "Please input your user!",
              },
            ]}
          >
            <DatePicker />
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
