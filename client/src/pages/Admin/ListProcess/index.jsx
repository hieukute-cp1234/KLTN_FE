import React, { useState } from "react";
import { List } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts";
import ProcessItem from "./ProcessItem";
import PreviewWorkflow from "./PreviewWorkFlow";
import { listProcess, diagrams } from "../../../dataFake";
import "./process.scss";

const ListProcess = () => {
  const navigate = useNavigate();
  const [toggleViewWorkflow, setViewWorkflow] = useState(false);

  const handleEditProcess = (process) => {
    navigate(`/admin/process/update/${process.id}`);
  };

  const handleCopyProcess = (key) => {};

  const handleDeleteProcess = (key) => {};

  const handleViewWorkflow = (key) => {
    setViewWorkflow(true);
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
      <PreviewWorkflow
        open={toggleViewWorkflow}
        onCancel={() => setViewWorkflow(false)}
        dataDiagrams={diagrams}
      />
    </Layout>
  );
};

export default ListProcess;
