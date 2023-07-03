import React from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import { optionTypeTask } from "../../../constants/options";
import { createTask, updateTask } from "../../../store/task/actions";

const CreateTask = (props) => {
  const { onCancel, form, editor, members, project, node, reload, selectTask } =
    props;

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (value) => {
    if (editor) {
      await updateTask({
        id: selectTask,
        data: value,
        success: (message) => {
          reload();
          onCancel();
        },
      });
    }

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
          reload();
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
        <Input placeholder="task name..." />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        rules={[
          {
            required: true,
            message: "Please input your type!",
          },
        ]}
      >
        <Select placeholder="select type..." options={optionTypeTask} />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea
          className="custom-area"
          rows={4}
          placeholder="Description by task..."
          maxLength={252}
          style={{
            resize: "none",
          }}
        />
      </Form.Item>

      <Form.Item
        label="Assign"
        name="mention"
        rules={[
          {
            required: true,
            message: "Please input your user!",
          },
        ]}
      >
        <Select
          placeholder="select member..."
          options={members.map((member) => ({
            label: member.email,
            value: member.id,
          }))}
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