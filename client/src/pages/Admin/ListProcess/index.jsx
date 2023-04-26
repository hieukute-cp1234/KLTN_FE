import React, { useState } from "react";
import { List, Modal, Form } from "antd";
import Layout from "../../../layouts";
import ProcessItem from "./ProcessItem";
import CreateAndEditProcess from "./CreateAndEdit";
import PreviewWorkflow from "./PreviewWorkFlow";
import { listProcess, diagrams } from "../../../dataFake";
import "./process.scss";

const ListProcess = () => {
  const [toggleCreateEdit, setCreateEdit] = useState(false);
  const [toggleViewWorkflow, setViewWorkflow] = useState(false);

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

  const handleViewWorkflow = (key) => {
    setViewWorkflow(true);
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
              onViewWorkflow={handleViewWorkflow}
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
      <PreviewWorkflow
        open={toggleViewWorkflow}
        onCancel={() => setViewWorkflow(false)}
        dataDiagrams={diagrams}
      />
    </Layout>
  );
};

export default ListProcess;
