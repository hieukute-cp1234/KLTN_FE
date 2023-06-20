import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { KEY_TAB_TASK } from "../../../constants";
import Task from "./Task";
import "./my-task.scss";

const TabComponenet = (props) => {
  const { keyTab, listTask } = props;

  const renderColorBackground = (tab) => {
    switch (tab) {
      case KEY_TAB_TASK.OPEN:
        return "#ff9c6e";
      case KEY_TAB_TASK.INPROGRESS:
        return "#69b1ff";
      case KEY_TAB_TASK.VERIFY:
        return "#fff566";
      default:
        return "#d9d9d9";
    }
  };

  return (
    <Droppable droppableId={keyTab}>
      {(provided) => (
        <div
          className="ms-tab"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="ms-tab__header">
            <div
              className="ms-tab__header__status"
              style={{ backgroundColor: renderColorBackground(keyTab) }}
            ></div>
            <span>{keyTab}</span>
            <span>{`(${listTask.length})`}</span>
          </div>
          <div className="ms-tab__content">
            {listTask.map((task, index) => (
              <Task task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default TabComponenet;
