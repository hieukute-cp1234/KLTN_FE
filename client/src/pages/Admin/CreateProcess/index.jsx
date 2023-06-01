import React, { useMemo, useState, useCallback, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import {
  RollbackOutlined,
  AppstoreAddOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import { customTypes } from "../../../components/workflow/nodes";
import EditMiniSize from "../../../components/workflow/ModalPreview/EditMiniSize";
import "./create-workflow.scss";

export const CreateProcessPage = () => {
  const nodeTypes = useMemo(() => customTypes, []);
  const { workflowId } = useParams();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [id, setId] = useState(0);
  const [selectNode, setSelectNode] = useState({});
  const [selectEdge, setSelectEdge] = useState({});
  const [dataWorkflow, setDataWorkflow] = useState({});

  useEffect(() => {
    console.log(workflowId);
  }, [workflowId]);

  // function handle nodes
  const handleSelectNode = (nodeValue) => {
    setSelectNode(nodeValue);
    setSelectEdge({});
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

  const handleChangeNodes = useCallback(
    (key, value, index) => {
      if (!selectNode?.id) return;
      const newNode = { ...selectNode };
      switch (key) {
        case "type":
          newNode[key] = value;
          break;
        case "handles":
          const newHandles = [...newNode.data[key]];
          newHandles[index] = value;
          newNode.data[key] = newHandles;
          break;
        default:
          newNode.data[key] = value;
          break;
      }

      setSelectNode(newNode);
    },
    [selectNode]
  );

  const handleAddNode = () => {
    setId(id + 1);
    const newNode = {
      id: `${id}`,
      type: "rectangleNode",
      data: {
        title: "Title",
        handles: [true, true, true, true],
        handleTarget: ["target", "target", "source", "source"],
        background: "#ffffff",
        role: 0,
        input: "input",
        output: "output",
        checkList: [],
        effortNumber: 0,
        effortType: 1,
      },
      position: { x: 500, y: 500 },
      edges: [],
    };

    setNodes([...nodes, newNode]);
  };

  const handleDeleteNode = () => {
    if (!selectNode.id) return;
    const newNodes = nodes.filter((node) => node.id !== selectNode.id);
    setNodes(newNodes);
    setSelectNode({});
  };

  //function handle edge
  const onConnect = useCallback(
    (params) => {
      const newEdge = {
        ...params,
        type: "step",
        label: "",
        markerEnd: { type: MarkerType.ArrowClosed },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  const handleSelectEdge = (edge) => {
    setSelectEdge({ ...edge });
    setSelectNode({});
  };

  useEffect(() => {
    if (selectEdge?.id) {
      setEdges((edges) =>
        edges.map((edge) => {
          if (edge.id === selectEdge.id) {
            edge.label = selectEdge.label;
          }
          return edge;
        })
      );
    }
  }, [selectEdge, setEdges]);

  const handleChangeEdge = (key, value) => {
    if (!selectEdge?.id) return;
    const newEdge = { ...selectEdge };
    newEdge[key] = value;
    setSelectEdge(newEdge);
  };

  //function handle workflow
  const handleChangeWorkflow = (key, value) => {
    const workflow = {};
    workflow[key] = value;
    setDataWorkflow(workflow);
  };

  const saveWorkflow = () => {
    const newWorkflow = { ...dataWorkflow, nodes: nodes, edges: edges };
    console.log(newWorkflow);
  };

  const actions = [
    {
      text: "Add node",
      class: "ms-btn-edit",
      icon: <AppstoreAddOutlined />,
      disabled: false,
      function: handleAddNode,
    },
    {
      text: "Delete node",
      class: "ms-btn-delete",
      icon: <DeleteOutlined />,
      disabled: !selectNode?.id,
      function: handleDeleteNode,
    },
    {
      text: "Create workflow",
      class: "ms-btn-submit",
      icon: <SaveOutlined />,
      disabled: !nodes.length,
      function: saveWorkflow,
    },
    {
      text: "Back",
      class: "ms-btn-back",
      icon: <RollbackOutlined />,
      disabled: false,
      function: () => {},
    },
  ];

  return (
    <Layout>
      <div className="ms-create-workflow">
        <div className="ms-create-workflow__header">
          {actions.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              classButton={button.class}
              beforeIcon={button.icon}
              disabled={button.disabled}
              click={button.function}
            />
          ))}
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
            onEdgeClick={(_, edge) => handleSelectEdge(edge)}
          >
            <EditMiniSize
              selectNode={selectNode}
              selectEdge={selectEdge}
              isSelectEdge={!!selectEdge?.id}
              changeNodes={handleChangeNodes}
              changeEdges={handleChangeEdge}
              changeWorkflow={handleChangeWorkflow}
            />
            <Controls />
            <Background variant="lines" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProcessPage;
