import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import EditMiniSize from "../../../components/workflow/ModalPreview/EditMiniSize";
import { ADMIN } from "../../../constants/routes";
import "./process.scss";

const PreviewWorkflow = (props) => {
  const { dataDiagrams, open, onCancel, startModalEdit } = props;
  const navigate = useNavigate();
  const [isEdit, setEdit] = useState(false);

  const lines = dataDiagrams.map((diagram) => diagram.edges).flat();
  const [nodes, setNodes, onNodesChange] = useNodesState(dataDiagrams);
  const [edges, setEdges, onEdgesChange] = useEdgesState(lines);

  useEffect(() => {
    if (startModalEdit) {
      setEdit(true);
    }
  }, [startModalEdit]);

  const redirectCreate = () => {
    navigate(ADMIN.CREATE_WORKFLOW);
  };

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

  const handleChangeWorkflow = (key, value) => {};

  const handleSelectNode = (nodeValue) => {};

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
          fitView
          attributionPosition="top-right"
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={(_event, node) => handleSelectNode(node)}
        >
          {isEdit && (
            <EditMiniSize changeWorkflow={handleChangeWorkflow} selectNode />
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
