import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker, AutoComplete } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import ButtonCommon from "../../../components/common/Button";

const CreateProject = (props) => {
  const { onCancel, onViewProcess } = props;

  const abc = [
    {
      name: "process 1process 1process 1process 1process 1process 1",
      id: 1,
    },
    {
      name: "process 2",
      id: 2,
    },
  ];

  const [listUser, setListUser] = useState([]);
  const [searchListProcess, setSearchListProcess] = useState(abc);

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

  useEffect(() => {
    const newOptionProcess = searchListProcess.map((process) => ({
      label: renderItemWorkflow(process),
      value: process.name,
    }));

    setSearchListProcess(newOptionProcess);
  }, []);

  const handleSubmit = (value) => {
    console.log("submit", value);
  };

  const handleSelect = (value) => {};

  const handleSearch = (text) => {
    console.log("text", text);
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
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your user!",
        //   },
        // ]}
      >
        <Select mode="multiple" options={listUser} defaultValue={1} />
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
          onSelect={handleSelect}
          onSearch={handleSearch}
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
