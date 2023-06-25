import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Modal, Form } from "antd";
import Layout from "../../../layouts";
import { fetchListUser } from "../../../store/auth/actions";
import { toggleModalAddUser } from "../../../store/auth";
import { columnUser } from "../../../constants/table";
import AddUser from "./AddUser";
import "./user.scss";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [editor, setEditor] = useState(false);

  const listUser = useSelector((state) => state.auth.listUser);
  const toggleAddUser = useSelector((state) => state.auth.isAddUser);

  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);

  const openModalEdit = () => {
    setEditor(true);
    dispatch(toggleModalAddUser(true));
  };

  const handleCancel = () => {
    setEditor(false);
    dispatch(toggleModalAddUser(false));
  };

  return (
    <Layout>
      <Table
        columns={columnUser({ onEdit: openModalEdit })}
        dataSource={listUser}
      />
      <Modal
        title={editor ? "Update User" : "Create User"}
        open={toggleAddUser}
        footer={null}
        onCancel={handleCancel}
      >
        <AddUser form={form} editor={editor} onCancel={handleCancel} />
      </Modal>
    </Layout>
  );
};

export default UsersPage;
