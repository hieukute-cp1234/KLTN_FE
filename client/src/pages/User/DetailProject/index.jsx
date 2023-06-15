import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Descriptions, Badge, Modal } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import Layout from "../../../layouts";
import ProcessTask from "./ProcessTask";
import Button from "../../../components/common/Button";
import PreviewProcess from "../../../components/workflow/ModalPreview";
import AddTask from "./AddTask";
import PreviewMembers from "./ListMember";
import { fetchDetailProject } from "../../../store/project/actions";
import { fetchTaskByProject } from "../../../store/task/actions";
import "./detail.scss";

const PageDetailProject = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [togglePreviewProcess, setTogglePreviewProcess] = useState(false);
  const [toggleViewMember, setToggleViewMember] = useState(false);
  const [nodeSelected, setNodeSelected] = useState("");
  const [listTask, setListTask] = useState([]);

  const detailProject = useSelector((state) => state.project.detailProject);

  useEffect(() => {
    dispatch(fetchDetailProject({ id: projectId }));
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
  };

  const openModalAddTask = (nodeId) => {
    setNodeSelected(nodeId);
    setToggleAddTask(true);
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
          <Descriptions.Item label="Start at">
            {detailProject.createdAt}
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
        />
      </div>
      <Modal
        title="add task"
        open={toggleAddTask}
        footer={null}
        onCancel={handleCancel}
      >
        <AddTask
          onCancel={handleCancel}
          reload={getTask}
          members={detailProject.members}
          node={nodeSelected}
          project={projectId}
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
