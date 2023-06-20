import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FullscreenOutlined } from "@ant-design/icons";
import { TYPE_TASK } from "../../../constants";
import "./my-task.scss";

const Task = (props) => {
  const { task, index } = props;

  const styleType = (type) => {
    switch (type) {
      case TYPE_TASK.TASK:
        return {
          background: "#bae637",
          text: "Task",
        };
      case TYPE_TASK.ISSUE:
        return {
          background: "#ffa940",
          text: "Issue",
        };
      default:
        return {
          background: "#ff4d4f",
          text: "Bug",
        };
    }
  };

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provider) => (
        <div
          className="ms-tab__content__task"
          key={task.id}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          <div className="ms-tab__content__task__header">
            <span style={{ background: styleType(task.type).background }}>
              {styleType(task.type).text}
            </span>
            <span>
              <FullscreenOutlined />
            </span>
          </div>
          <div className="ms-tab__content__task__content">
            <span>Assign by: {task.manager?.email || ""}</span>
            <span>{task.name}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
