import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import { typeEffort } from "../../../constants/options";
import { convertEffortByType } from "../../../helpers";
import { createTask } from "../../../store/task/actions";

const CreateTask = (props) => {
  const { onCancel, form, editor, members, project, node } = props;

  const [valueTypeEffort, setValueTypeEffort] = useState(0);

  const user = useSelector((state) => state.auth.user);

  const handleChangeTypeEffort = (value) => {
    setValueTypeEffort(value);
  };

  const handleSubmit = async (value) => {
    const newTask = {
      ...value,
      status: 1,
      project: project,
      processStep: node,
      manager: user.id,
    };

    await createTask({
      data: newTask,
      actions: {
        success: (res) => {
          onCancel();
        },
      },
    });
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
        label="mention"
        name="mention"
        rules={[
          {
            required: true,
            message: "Please input your user!",
          },
        ]}
      >
        <Select
          placeholder="select user..."
          options={members.map((member) => ({
            label: member.email,
            value: member.id,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Effort type"
        name="effortType"
        rules={[
          {
            required: true,
            message: "Please input your user!",
          },
        ]}
      >
        <Select
          placeholder="select user..."
          options={typeEffort.map((type) => ({
            value: type.value,
            label: type.text,
          }))}
          onChange={handleChangeTypeEffort}
        />
      </Form.Item>

      <Form.Item
        label="Effort"
        name="effort"
        rules={[
          {
            required: true,
            message: "Please input your user!",
          },
        ]}
      >
        <Select
          placeholder="select user..."
          options={convertEffortByType(valueTypeEffort)}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          {editor ? "Update" : "Create"}
        </Button>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
