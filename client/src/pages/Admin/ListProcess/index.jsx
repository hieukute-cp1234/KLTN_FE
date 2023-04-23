import React, { useState } from "react";
import { List, Modal, Form } from "antd";
import Layout from "../../../layouts";
import ProcessItem from "./ProcessItem";
import CreateAndEditProcess from "./CreateAndEdit";
import { listProcess } from "../../../dataFake";
import "./process.scss";

const ListProcess = () => {
  const [toggleCreateEdit, setCreateEdit] = useState(false);

  const [formCreate] = Form.useForm();

  const handleEditProcess = (process) => {
    formCreate.setFieldsValue(process);
    setCreateEdit(true);
  };

  const handleCopyProcess = (key) => {
    console.log(key);
  };

  const handleDeleteProcess = (key) => {
    console.log(key);
  };

  const handleViewWorkFollow = (key) => {
    console.log(key);
  };

  const handleSubmitForm = () => {
    formCreate.submit();
  };

  return (
    <Layout>
      <List
        dataSource={listProcess}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <ProcessItem
              processData={item}
              onEdit={handleEditProcess}
              onCopy={handleCopyProcess}
              onDelete={handleDeleteProcess}
              onViewWorkFollow={handleViewWorkFollow}
            />
          </List.Item>
        )}
      />
      <Modal
        title="edit process"
        open={toggleCreateEdit}
        onCancel={() => setCreateEdit(false)}
        onOk={handleSubmitForm}
      >
        <CreateAndEditProcess formCreateEdit={formCreate} />
      </Modal>
    </Layout>
  );
};

export default ListProcess;
