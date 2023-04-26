import React, { useState } from "react";
import { Modal } from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  SaveOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import "./process.scss";

const PreviewWorkflow = (props) => {
  const { dataDiagrams, open, onCancel } = props;
  const [isEdit, setEdit] = useState(false);
  const lines = dataDiagrams.map((diagram) => diagram.edges).flat();
  const [nodes, setNodes, onNodesChange] = useNodesState(dataDiagrams);
  const [edges, setEdges, onEdgesChange] = useEdgesState(lines);

  const redirectCreate = () => {};

  const redirectEdit = () => {
    setEdit(true);
  };

  const redirectDetail = () => {
    setEdit(false);
  };

  const handleSave = () => {};

  const buttonActions = [
    {
      text: "Edit",
      icon: <EditOutlined />,
      function: redirectEdit,
      class: "ms-btn-edit",
      showButton: !isEdit,
    },
    {
      text: "Create",
      icon: <PlusCircleOutlined />,
      function: redirectCreate,
      class: "ms-btn-copy",
      showButton: !isEdit,
    },
    {
      text: "Detail",
      icon: <FileSearchOutlined />,
      function: redirectDetail,
      class: "ms-btn-edit",
      showButton: isEdit,
    },
    {
      text: "Save",
      icon: <SaveOutlined />,
      function: handleSave,
      class: "ms-btn-submit",
      showButton: isEdit,
    },
  ];

  return (
    <Modal
      title="name work flow"
      style={{ top: 20 }}
      open={open}
      width="90vw"
      footer={null}
      onCancel={onCancel}
    >
      <div className="preview-workflow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="top-right"
        >
          {isEdit && (
            <div className="box-editor">
              <span>Workflow Editor</span>
              <Input placeholder="Node name" label="List role"/>
              <span>Node Editor</span>
              <Input placeholder="Node name" label="Name"/>
              <Input placeholder="Color" label="Color"/>
              <Input placeholder="Mention role" label="Mention"/>
            </div>
          )}

          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
      <div className="preview-workflow-actions">
        {buttonActions
          .filter((button) => button.showButton)
          .map((button) => (
            <Button
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
