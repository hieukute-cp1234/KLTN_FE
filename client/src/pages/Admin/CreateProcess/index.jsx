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
  AppstoreAddOutlined,
  SaveOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getRandomId,
  createProcess,
  updateProcess,
  fetchProcessById,
} from "../../../store/process/actions";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import { customTypes } from "../../../components/workflow/nodes";
import EditMiniSize from "../../../components/workflow/ModalPreview/EditMiniSize";
import { ADMIN } from "../../../constants/routes";
import "./create-workflow.scss";

export const CreateProcessPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nodeTypes = useMemo(() => customTypes, []);
  const { processId } = useParams();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectNode, setSelectNode] = useState({});
  const [selectEdge, setSelectEdge] = useState({});
  const [dataProcess, setDataProcess] = useState({});
  const [processName, setProcessName] = useState("");

  useEffect(() => {
    if (processId) {
      fetchDetailProcess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetailProcess = () => {
    dispatch(
      fetchProcessById({
        id: processId,
        actions: {
          success: (data) => {
            setNodes(data.nodes || []);
            setEdges(data.edges || []);
            setProcessName(data.name);
          },
        },
      })
    );
  };

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
        case "handleTarget":
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

  const handleAddNode = async () => {
    const newId = await getRandomId();
    const newNode = {
      id: `${newId}`,
      type: "rectangleNode",
      data: {
        title: "Title",
        handles: [true, true, true, true],
        handleTarget: ["target", "source", "source", "target"],
        background: "#ffffff",
        role: 0,
        input: "input",
        output: "output",
        checkList: [],
        effortNumber: 0,
        effortType: 1,
      },
      position: { x: 500, y: 500 },
    };
    setNodes([...nodes, newNode]);
  };

  const handleDeleteNode = () => {
    if (selectNode.id) {
      const newNodes = nodes.filter((node) => node.id !== selectNode.id);
      const newEdges = edges.filter(
        (edge) => edge.source !== selectNode.id || edge.target !== selectNode.id
      );
      setEdges(newEdges);
      setNodes(newNodes);
      setSelectNode({});
    }

    if (selectEdge.id) {
      const newEdges = edges.filter((edge) => edge.id !== selectEdge.id);
      setEdges(newEdges);
      setSelectEdge({});
    }
  };

  //function handle edge
  const onConnect = useCallback(
    async (params) => {
      const newId = await getRandomId();
      const newEdge = {
        ...params,
        id: newId,
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
  const handleChangeProcess = (key, value) => {
    const process = {};
    process[key] = value;
    setDataProcess({ ...dataProcess, ...process });
  };

  const handleChangeNameProcess = (e) => {
    const value = e.target.value;
    setProcessName(value);
  };

  const saveProcess = () => {
    const newProcess = {
      ...dataProcess,
      name: processName,
      nodes: nodes,
      edges: edges,
    };

    if (processId) {
      dispatch(
        updateProcess({
          id: processId,
          data: newProcess,
          actions: {
            success: () => {
              fetchDetailProcess();
            },
          },
        })
      );
      return;
    }
    dispatch(
      createProcess({
        data: newProcess,
        actions: {
          success: () => {
            navigate(ADMIN.PROCESS);
          },
        },
      })
    );
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
      disabled: !selectNode?.id && !selectEdge?.id,
      function: handleDeleteNode,
    },
    {
      text: `${processId ? "Update" : "Create"} Process`,
      class: "ms-btn-submit",
      icon: <SaveOutlined />,
      disabled: !nodes.length,
      function: saveProcess,
    },
  ];

  return (
    <Layout>
      <div className="ms-create-workflow">
        <div className="ms-create-workflow__header">
          <input
            className="ms-create-workflow__header__name"
            placeholder="process name..."
            value={processName}
            onChange={handleChangeNameProcess}
          />
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
              dataProcess={dataProcess}
              isSelectEdge={!!selectEdge?.id}
              changeNodes={handleChangeNodes}
              changeEdges={handleChangeEdge}
              changeProcess={handleChangeProcess}
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
