import React, { useState, useEffect } from "react";
import { Table, Modal, Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { toggleModalAddRole } from "../../../store/role";
import Layout from "../../../layouts";
import {
  createRole,
  fetchRoles,
  updateRole,
  deleteRole,
} from "../../../store/role/actions";
import { columnRole } from "../../../constants/table";
import { optionLevels } from "../../../constants/options";
import "./list-role.scss";

const ListRolePage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const toggleAddRole = useSelector((state) => state.role.isAddRole);
  const [isEdit, setEdit] = useState(false);
  const [listRole, setListRole] = useState([]);
  const [selectRole, setSelectRole] = useState("");

  useEffect(() => {
    getAllRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllRole = () => {
    dispatch(
      fetchRoles({
        actions: {
          success: (data) => {
            setListRole(data);
          },
        },
      })
    );
  };

  const openModalEdit = (role) => {
    setEdit(true);
    form.setFieldsValue(role);
    setSelectRole(role.id);
    dispatch(toggleModalAddRole(true));
  };

  const handelClose = () => {
    setEdit(false);
    handleClearValue();
    dispatch(toggleModalAddRole(false));
  };

  const handleDeleteRole = async (id) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Are you sure delete!",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;
    dispatch(
      deleteRole({
        id,
        actions: {
          success: () => {
            handleClearValue(true);
          },
        },
      })
    );
  };

  const handleCreateRole = (value) => {
    if (selectRole) {
      dispatch(
        updateRole({
          id: selectRole,
          data: value,
          actions: {
            success: () => {
              handleClearValue(true);
            },
          },
        })
      );
      return;
    }
    dispatch(
      createRole({
        data: value,
        actions: {
          success: () => {
            handleClearValue(true);
          },
        },
      })
    );
  };

  const handleClearValue = (load) => {
    if (load) {
      getAllRole();
    }
    dispatch(toggleModalAddRole(false));
    setSelectRole("");
    form.resetFields();
  };

  return (
    <Layout>
      <Table
        columns={columnRole({
          onUpdate: openModalEdit,
          onDelete: handleDeleteRole,
        })}
        dataSource={listRole}
      />
      <Modal
        title={`${isEdit ? "Update" : "Create"} role`}
        footer={null}
        open={toggleAddRole}
        onCancel={handelClose}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          form={form}
          onFinish={handleCreateRole}
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
            <Input placeholder="Role name..." />
          </Form.Item>

          <Form.Item
            label="Code"
            name="code"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="code role" />
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
            initialValue="1"
          >
            <Select options={optionLevels} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {`${isEdit ? "Update" : "Create"}`}
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

export default ListRolePage;
