import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Select } from "antd";
import { fetchRoles } from "../../../store/role/actions";
import { createUser, fetchListUser } from "../../../store/auth/actions";
import "./user.scss";

const AddUser = (props) => {
  const { form, onCancel, editor } = props;

  const dispatch = useDispatch();

  const listRole = useSelector((state) => state.role.listRole);

  useEffect(() => {
    dispatch(
      fetchRoles({
        actions: {
          success: () => {},
        },
      })
    );
  }, []);

  const handleSubmit = async (value) => {
    try {
      await createUser({
        data: value,
        success: () => {
          dispatch(fetchListUser());
          onCancel();
        },
      });
    } catch (_error) {}
  };

  return (
    <div className="add-user">
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="example@gmail.com..." />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input placeholder="123456" defaultValue="123456" />
        </Form.Item>

        <Form.Item
          label="Specialize"
          name="specialize"
          rules={[
            {
              required: true,
              message: "Please input your type!",
            },
          ]}
        >
          <Select
            placeholder="select role"
            options={listRole.map((role) => ({
              label: role.name,
              value: role.id,
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
    </div>
  );
};

export default AddUser;
