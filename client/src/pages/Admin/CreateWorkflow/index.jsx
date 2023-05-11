import React, { useMemo, useState, useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import {
  RollbackOutlined,
  AppstoreAddOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import { customTypes } from "../../../components/workflow/nodes";
import EditMiniSize from "../../../components/workflow/ModalPreview/EditMiniSize";
import "./create-workflow.scss";

export const CreateWorkflowPage = () => {
  const nodeTypes = useMemo(() => customTypes, []);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const [id, setId] = useState(0);
  const [selectNode, setSelectNode] = useState({});

  const handleSelectNode = (nodeValue) => {
    setSelectNode(nodeValue);
  };

  useEffect(() => {
    if (selectNode?.id) {
      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id === selectNode.id) {
            node.type = selectNode.type;
            node.data = { ...selectNode.data };
          }
          return node;
        })
      );
    }
  }, [selectNode, setNodes]);

  const handleChangeWorkflow = (key, value) => {
    if (!selectNode) return;
    const newNode = { ...selectNode };
    if (key === "type") {
      newNode[key] = value;
    } else {
      newNode.data[key] = value;
    }

    setSelectNode(newNode);
  };

  const handleAddNode = () => {
    setId(id + 1);
    const newNode = {
      id: `${id}`,
      type: "rectangleNode",
      data: {
        text: "Node Name",
        handles: [true, true, true, true],
        handleTarget: ["target", "source", "source", "source"],
        background: "#ffffff",
        isResize: false,
      },
      position: { x: 500, y: 500 },
      edges: [],
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <Layout>
      <div className="ms-create-workflow">
        <div className="ms-create-workflow__header">
          <Button
            text="add node"
            classButton="ms-btn-edit"
            beforeIcon={<AppstoreAddOutlined />}
            click={handleAddNode}
          />
          <Button
            text="create workflow"
            classButton="ms-btn-submit"
            beforeIcon={<SaveOutlined />}
          />
          <Button
            text="back"
            classButton="ms-btn-back"
            beforeIcon={<RollbackOutlined />}
          />
        </div>
        <div className="ms-create-workflow__content">
          <ReactFlow
            fitView
            nodeTypes={nodeTypes}
            attributionPosition="top-right"
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(_, node) => handleSelectNode(node)}
          >
            <EditMiniSize
              changeWorkflow={handleChangeWorkflow}
              selectNode={selectNode}
            />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </Layout>
  );
};

export default CreateWorkflowPage;
