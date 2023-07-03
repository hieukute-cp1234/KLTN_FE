import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Descriptions, Badge, Modal, Form } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Layout from "../../../layouts";
import ProcessTask from "./ProcessTask";
import Button from "../../../components/common/Button";
import PreviewProcess from "../../../components/workflow/ModalPreview";
import AddTask from "./AddTask";
import PreviewMembers from "./ListMember";
import Documents from "./Documents";
import AddDocument from "./AddDocument";
import { fetchDetailProject } from "../../../store/project/actions";
import { fetchTaskByProject, deleteFile } from "../../../store/task/actions";
import { SOCKET_HOST } from "../../../constants/config";
import { formatDate } from "../../../helpers";
import "./detail.scss";

const PageDetailProject = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { projectId } = useParams();

  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [togglePreviewProcess, setTogglePreviewProcess] = useState(false);
  const [toggleViewMember, setToggleViewMember] = useState(false);
  const [nodeSelected, setNodeSelected] = useState("");
  const [taskSelected, setTaskSelected] = useState("");
  const [listTask, setListTask] = useState([]);
  const [editor, setEditor] = useState(false);
  const [editorDocument, setEditorDocument] = useState(false);
  const [toggleDocument, setToggleDocument] = useState(false);
  const [listDocument, setListDocument] = useState([]);

  const detailProject = useSelector((state) => state.project.detailProject);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_HOST);
    socketRef.current.connect();

    socketRef.current.on("updateTask", (taskSocket) => {
      setListTask((tasks) =>
        tasks.map((task) => {
          if (task.id === taskSocket.id) {
            return { ...task, status: taskSocket.status };
          }
          return task;
        })
      );
    });
  }, []);

  useEffect(() => {
    dispatch(
      fetchDetailProject({
        id: projectId,
        success: (data) => {
          setListDocument(data.documents);
        },
      })
    );
    const fetchTask = async () => {
      await getTask({ projectId });
    };
    fetchTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTask = async (params = {}) => {
    await fetchTaskByProject({
      params: { ...params },
      actions: {
        success: (data) => {
          setListTask(data);
        },
      },
    });
  };

  const onViewWorkflow = () => {
    setTogglePreviewProcess(true);
  };

  const onViewMember = () => {
    setToggleViewMember(true);
  };

  const handleCancel = () => {
    setToggleAddTask(false);
    setToggleDocument(false);
  };

  const openModalAddTask = (nodeId) => {
    setNodeSelected(nodeId);
    form.resetFields();
    setEditor(false);
    setToggleAddTask(true);
  };

  const openModalEditTask = (task) => {
    const value = {
      ...task,
      mention: task.mention.id,
    };

    setTaskSelected(task.id);
    setEditor(true);
    form.setFieldsValue(value);
    setToggleAddTask(true);
  };

  const openModalAddDocument = () => {
    setEditorDocument(false);
    setToggleDocument(true);
  };

  const refetchDocument = (document) => {
    setListDocument([...listDocument, document]);
  };

  const handleDeleteDocument = async (id) => {
    await deleteFile({
      id,
      success: () => {
        setListDocument((documents) =>
          documents.filter((doc) => doc.id !== id)
        );
      },
    });
  };

  return (
    <Layout>
      <p className="project__name">{detailProject.name}</p>
      <div className="project__detail">
        <Descriptions>
          <Descriptions.Item label="Work Flow" span={1}>
            <Button
              text="view"
              classButton="ms-btn-view"
              afterIcon={<FileSearchOutlined />}
              click={() => onViewWorkflow()}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={2}>
            <Badge status="success" text="start" />
          </Descriptions.Item>
          <Descriptions.Item label="Member" span={3}>
            <Button
              text="view"
              classButton="ms-btn-view"
              afterIcon={<FileSearchOutlined />}
              click={() => onViewMember()}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {detailProject.descriptions}
          </Descriptions.Item>
          <Descriptions.Item label="Documents" span={3}>
            <Documents
              documents={listDocument}
              onAddDocument={openModalAddDocument}
              onDeleteDocument={handleDeleteDocument}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Created at">
            {formatDate(detailProject.createdAt)}
          </Descriptions.Item>
          <Descriptions.Item label="End at">
            {detailProject.endDate}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <div className="project__process">
        <ProcessTask
          tasks={listTask}
          nodes={detailProject.process?.nodes}
          onAddTask={openModalAddTask}
          onEditTask={openModalEditTask}
        />
      </div>
      <Modal
        title={`${editor ? "Update" : "Create"} task`}
        open={toggleAddTask}
        footer={null}
        onCancel={handleCancel}
      >
        <AddTask
          form={form}
          editor={editor}
          onCancel={handleCancel}
          reload={getTask}
          members={detailProject.members}
          node={nodeSelected}
          project={projectId}
          selectTask={taskSelected}
        />
      </Modal>
      <Modal
        title={`${editorDocument ? "Update" : "Create"} Document`}
        open={toggleDocument}
        footer={null}
        onCancel={handleCancel}
      >
        <AddDocument
          form={form}
          editor={editorDocument}
          onCancel={handleCancel}
          updateDocument={refetchDocument}
        />
      </Modal>
      <Modal
        title="Members"
        open={toggleViewMember}
        footer={null}
        onCancel={() => setToggleViewMember(false)}
      >
        <PreviewMembers members={detailProject.members} />
      </Modal>
      <PreviewProcess
        open={togglePreviewProcess}
        dataDiagrams={detailProject?.process || {}}
        onCancel={() => setTogglePreviewProcess(false)}
      />
    </Layout>
  );
};

export default PageDetailProject;
