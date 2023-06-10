import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select, DatePicker, AutoComplete } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import ButtonCommon from "../../../components/common/Button";
import {
  createProject,
  fetchAllProject,
  updateProject,
} from "../../../store/project/actions";
import { fetchListUser } from "../../../store/auth/actions";
import { FORMAT_DAY } from "../../../constants";

const CreateProject = (props) => {
  const { onCancel, onViewProcess, form, editor, projectSelected } = props;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.listUser);
  const listProcess = useSelector((state) => state.process.listProcess);

  useEffect(() => {
    if (!user.length) {
      dispatch(fetchListUser({ isUser: true }));
    }

    const newOptionProcess = listProcess.map((process) => ({
      label: renderItemWorkflow(process),
      value: process.name,
    }));

    setSearchListProcess(newOptionProcess);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const processSelected = listProcess.find(
      (process) => process.name === value.process
    );
    if (!processSelected) return;

    const newProject = {
      ...value,
      endDate: value.endDate.format(FORMAT_DAY),
      process: processSelected.id,
    };

    if (editor) {
      await updateProject({
        id: projectSelected,
        data: newProject,
        success: () => {
          dispatch(fetchAllProject());
          onCancel();
        },
      });
      return;
    }

    await createProject({
      data: newProject,
      actions: {
        success: () => {
          dispatch(fetchAllProject());
          onCancel();
        },
      },
    });
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
      form={form}
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
        name="members"
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
        <DatePicker format={FORMAT_DAY} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          {editor ? "update" : "Create"}
        </Button>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProject;
