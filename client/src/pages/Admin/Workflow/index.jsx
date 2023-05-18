import React, { useState } from "react";
import { List } from "antd";
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import PreviewWorkflow from "../ListProcess/PreviewWorkFlow";
import { listProcess, diagrams } from "../../../dataFake";
import "./workflow.scss";

const AdminWorkflowPage = () => {
  const [toggleViewWorkflow, setViewWorkflow] = useState(false);

  const openDetailWorkflow = (workflow) => {
    setViewWorkflow(true);
  };

  const handleCopyWorkflow = (workflow) => {};

  const handleDeleteWorkflow = async (workflow) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Are you sure delete?",
      showCancelButton: true,
    });
    if (!result.isConfirmed) return;
  };

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
      />
    </Layout>
  );
};

export default AdminWorkflowPage;
