import React, { useMemo, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import { diagrams } from "../../../dataFake";
import { customTypes } from "../../../components/workflow/nodes";
import EditMiniSize from "../../../components/workflow/ModalPreview/EditMiniSize";
import "./create-workflow.scss";

export const CreateWorkflowPage = () => {
  const lines = diagrams.map((diagram) => diagram.edges).flat();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const [id, setId] = useState(0);

  const nodeTypes = useMemo(() => customTypes, []);

  const handleSelectNode = (nodeValue) => {};

  const handleChangeWorkflow = (value) => {
    console.log(value);
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
    console.log(nodes);
  };

  return (
    <Layout>
      <div className="ms-create-workflow">
        <div className="ms-create-workflow__header">
          <Button text="back" />
          <Button text="add node" click={handleAddNode} />
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
            onNodeClick={(_event, node) => handleSelectNode(node)}
          >
            <EditMiniSize changeWorkflow={handleChangeWorkflow} selectNode />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </Layout>
  );
};

export default CreateWorkflowPage;
