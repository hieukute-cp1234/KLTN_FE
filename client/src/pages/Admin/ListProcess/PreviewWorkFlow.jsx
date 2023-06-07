import React, { useMemo } from "react";
import { Modal } from "antd";
import { PlusCircleOutlined, EditOutlined } from "@ant-design/icons";
import ReactFlow, { Background, Controls } from "reactflow";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { ADMIN } from "../../../constants/routes";
import { customTypes } from "../../../components/workflow/nodes";
import "./process.scss";

const PreviewWorkflow = (props) => {
  const nodeTypes = useMemo(() => customTypes, []);
  const { dataDiagrams, open, onCancel, name } = props;
  const navigate = useNavigate();

  const redirectCreate = () => {
    navigate(ADMIN.CREATE_PROCESS);
  };

  const redirectEdit = () => {
    navigate(`${ADMIN.PROCESS}/update/${dataDiagrams.id}`);
  };

  const buttonActions = [
    {
      text: "Edit",
      icon: <EditOutlined />,
      function: redirectEdit,
      class: "ms-btn-edit",
    },
    {
      text: "Create",
      icon: <PlusCircleOutlined />,
      function: redirectCreate,
      class: "ms-btn-copy",
    },
  ];

  return (
    <Modal
      title={name}
      style={{ top: 20 }}
      open={open}
      width="90vw"
      footer={null}
      onCancel={onCancel}
    >
      <div className="preview-workflow">
        <ReactFlow
          fitView
          nodeTypes={nodeTypes}
          attributionPosition="top-right"
          nodes={dataDiagrams.nodes}
          edges={dataDiagrams.edges}
        >
          <Controls />
          <Background variant="lines" gap={16} />
        </ReactFlow>
      </div>
      <div className="preview-workflow-actions">
        {buttonActions.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            classButton={button.class}
            beforeIcon={button.icon}
            click={button.function}
          />
        ))}
      </div>
    </Modal>
  );
};

export default PreviewWorkflow;
