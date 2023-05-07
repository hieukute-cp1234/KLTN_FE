import React from "react";
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
} from "reactflow";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import { diagrams } from "../../../dataFake";
import "./create-workflow.scss";

export const CreateWorkflowPage = () => {
  const lines = diagrams.map((diagram) => diagram.edges).flat();
  const [nodes, setNodes, onNodesChange] = useNodesState(diagrams);
  const [edges, setEdges, onEdgesChange] = useEdgesState(lines);

  const handleSelectNode = (nodeValue) => {};

  return (
    <Layout>
      <div className="ms-create-workflow">
        <div className="ms-create-workflow__header">
          <Button text="back" />
        </div>
        <div className="ms-create-workflow__content">
          <ReactFlow
            fitView
            attributionPosition="top-right"
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={(_event, node) => handleSelectNode(node)}
          >
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </Layout>
  );
};

export default CreateWorkflowPage;
