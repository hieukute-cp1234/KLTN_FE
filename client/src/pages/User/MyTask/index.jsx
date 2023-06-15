import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
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

  useEffect(() => {
    getTask();
  }, []);

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

  return (
    <Layout>
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
