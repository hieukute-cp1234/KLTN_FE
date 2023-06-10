import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import Layout from "../../../layouts";
import { fetchListUser } from "../../../store/auth/actions";
import { columnUser } from "../../../constants/table";
import "./user.scss";

const UsersPage = () => {
  const dispatch = useDispatch();

  const listUser = useSelector((state) => state.auth.listUser);

  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);

  const openModalEdit = () => {};

  return (
    <Layout>
      <Table
        columns={columnUser({ onEdit: openModalEdit })}
        dataSource={listUser}
      />
    </Layout>
  );
};

export default UsersPage;
