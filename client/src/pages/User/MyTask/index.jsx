import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { fetchProjectForUser } from "../../../store/project/actions";
import Layout from "../../../layouts";
import Tab from "./Tab";
import {
  fetchTaskByProject,
  updateStatusTask,
} from "../../../store/task/actions";
import { KEY_TAB_TASK, STATUS_TASK } from "../../../constants";
import "./my-task.scss";

const PageMyTask = () => {
  const [listTask, setListTask] = useState({});
  const [listProject, setListProject] = useState([]);
  const [projectSelected, setProjectSelectde] = useState("");

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchData = async () => {
      await getProjectForMe();
      if (projectSelected && user.id) {
        await getTask({ projectId: projectSelected, userId: user.id });
      }
    };
    fetchData();
  }, [projectSelected, user]);

  const getProjectForMe = async () => {
    await fetchProjectForUser({
      success: (data) => {
        const newData = data.map((project) => ({
          label: project.name,
          key: project.id,
        }));
        if (newData.length) {
          setProjectSelectde(newData[0].key);
        }
        setListProject(newData);
      },
    });
  };

  const getTask = async (params = {}) => {
    await fetchTaskByProject({
      params: { ...params },
      actions: {
        success: (data) => {
          const newListTask = {};
          newListTask[KEY_TAB_TASK.OPEN] = data.filter(
            (task) => task.status === STATUS_TASK.OPEN
          );
          newListTask[KEY_TAB_TASK.INPROGRESS] = data.filter(
            (task) => task.status === STATUS_TASK.INPROGRESS
          );
          newListTask[KEY_TAB_TASK.VERIFY] = data.filter(
            (task) => task.status === STATUS_TASK.VERIFY
          );
          newListTask[KEY_TAB_TASK.CLOSE] = data.filter(
            (task) => task.status === STATUS_TASK.CLOSE
          );

          setListTask(newListTask);
        },
      },
    });
  };

  const getStatus = (type) => {
    switch (type) {
      case KEY_TAB_TASK.OPEN:
        return STATUS_TASK.OPEN;
      case KEY_TAB_TASK.INPROGRESS:
        return STATUS_TASK.INPROGRESS;
      case KEY_TAB_TASK.VERIFY:
        return STATUS_TASK.VERIFY;
      default:
        return STATUS_TASK.CLOSE;
    }
  };

  const updateTaskByStatus = (oleKey, newKey, taskId) => {
    if (oleKey === newKey) return;
    const taskDraged = listTask[oleKey].find((task) => task.id === taskId);
    const newTask = { ...listTask };
    newTask[oleKey] = listTask[oleKey].filter((task) => task.id !== taskId);
    newTask[newKey] = [...listTask[newKey], taskDraged];
    setListTask(newTask);
    const status = getStatus(newKey);
    updateStatusTask({ id: taskDraged.id, data: { status } });
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (destination) {
      updateTaskByStatus(
        source.droppableId,
        destination.droppableId,
        draggableId
      );
    }
  };

  const renderProjectName = (id) => {
    const projectSelected = listProject.find((project) => project.key === id);
    return projectSelected ? projectSelected.label : "No Project";
  };

  const selectProject = ({ key }) => {
    setProjectSelectde(key);
  };

  return (
    <Layout>
      <div className="header">
        <span>Project:</span>
        <div className="header__dropdown">
          <Dropdown
            menu={{
              items: listProject,
              onClick: selectProject,
            }}
            trigger={["click"]}
          >
            <div>
              {renderProjectName(projectSelected)} <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="wrapper-tab">
          <Tab
            keyTab={KEY_TAB_TASK.OPEN}
            listTask={listTask[KEY_TAB_TASK.OPEN] || []}
          />
          <Tab
            keyTab={KEY_TAB_TASK.INPROGRESS}
            listTask={listTask[KEY_TAB_TASK.INPROGRESS] || []}
          />
          <Tab
            keyTab={KEY_TAB_TASK.VERIFY}
            listTask={listTask[KEY_TAB_TASK.VERIFY] || []}
          />
          <Tab
            keyTab={KEY_TAB_TASK.CLOSE}
            listTask={listTask[KEY_TAB_TASK.CLOSE] || []}
          />
        </div>
      </DragDropContext>
    </Layout>
  );
};

export default PageMyTask;
