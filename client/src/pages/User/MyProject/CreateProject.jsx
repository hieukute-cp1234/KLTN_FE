import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select, DatePicker, AutoComplete } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import ButtonCommon from "../../../components/common/Button";
import { createProject } from "../../../store/project/actions";
import { fetchListUser } from "../../../store/auth/actions";
import { fetchListProcess } from "../../../store/process/actions";

const CreateProject = (props) => {
  const { onCancel, onViewProcess } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.listUser);
  const listProcess = useSelector((state) => state.process.listProcess);

  useEffect(() => {
    if (!user.length) {
      dispatch(fetchListUser({ isUser: true }));
    }

    if (!listProcess.length) {
      dispatch(fetchListProcess({ params: {} }));
    }

    const newOptionProcess = listProcess.map((process) => ({
      label: renderItemWorkflow(process),
      value: process.name,
    }));

    setSearchListProcess(newOptionProcess);
  }, []);

  const [searchListProcess, setSearchListProcess] = useState([]);

  const renderItemWorkflow = (process) => {
    return (
      <div className="item-option-process">
        <span>{process.name}</span>
        <ButtonCommon
          text="view"
          classButton="ms-btn-view"
          afterIcon={<FileSearchOutlined />}
          click={() => onViewProcess(process.id)}
        />
      </div>
    );
  };

  const handleSubmit = async (value) => {
    const newProject = {
      ...value,
      process: listProcess.fin((process) => process.name === value.process),
    };
    console.log(newProject);
    // await createProject({
    //   data: value,
    //   actions: {
    //     success: () => {},
    //   },
    // });
  };

  const handleSearch = (text) => {
    const newSearch = listProcess
      .filter((process) =>
        process.name.toLowerCase().includes(text.toLowerCase())
      )
      .map((process) => ({
        label: renderItemWorkflow(process),
        value: process.name,
      }));

    setSearchListProcess(newSearch);
  };

  return (
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
        name="name"
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
        name="description"
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
        <Select
          mode="multiple"
          placeholder="select user..."
          options={user.map((user) => ({ label: user.email, value: user.id }))}
        />
      </Form.Item>

      <Form.Item
        label="Process"
        name="process"
        rules={[
          {
            required: true,
            message: "Please input your user!",
          },
        ]}
      >
        <AutoComplete
          placeholder="select process..."
          options={searchListProcess}
          onSearch={handleSearch}
        />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="endDate"
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
          Create
        </Button>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProject;
