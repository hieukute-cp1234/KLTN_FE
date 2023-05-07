import React, { useState } from "react";
import { List } from "antd";
import { EditOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import PreviewWorkflow from "../ListProcess/PreviewWorkFlow";
import { listProcess, diagrams } from "../../../dataFake";
import "./workflow.scss";

const AdminWorkflowPage = () => {
  const navigate = useNavigate();

  const [toggleViewWorkflow, setViewWorkflow] = useState(false);
  const [startModalEdit, setStartModalEdit] = useState(false);

  const openDetailWorkflow = (workflow) => {
    setStartModalEdit(false);
    setViewWorkflow(true);
  };

  const openEditWorkflow = (workflow) => {
    setStartModalEdit(true);
    setViewWorkflow(true);
  };

  const handleCopyWorkflow = (workflow) => {};

  const handleDeleteWorkflow = (workflow) => {};

  return (
    <Layout>
      <List
        dataSource={listProcess}
        bordered
        renderItem={(item) => (
          <List.Item key={item.id}>
            <div className="workflow-item">
              <div
                className="workflow-item__label"
                onClick={() => openDetailWorkflow(item)}
              >
                {item.name}
              </div>
              <div className="workflow-item__actions">
                <Button
                  text="Edit"
                  classButton="ms-btn-edit"
                  afterIcon={<EditOutlined />}
                  click={() => openEditWorkflow(item)}
                />
                <Button
                  text="Copy"
                  classButton="ms-btn-copy"
                  afterIcon={<CopyOutlined />}
                  click={() => handleCopyWorkflow(item)}
                />
                <Button
                  text="Delete"
                  classButton="ms-btn-delete"
                  afterIcon={<DeleteOutlined />}
                  click={() => handleDeleteWorkflow(item)}
                />
              </div>
            </div>
          </List.Item>
        )}
      />
      <PreviewWorkflow
        open={toggleViewWorkflow}
        onCancel={() => setViewWorkflow(false)}
        dataDiagrams={diagrams}
        startModalEdit={startModalEdit}
      />
    </Layout>
  );
};

export default AdminWorkflowPage;
