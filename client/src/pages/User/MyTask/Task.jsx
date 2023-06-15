import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./my-task.scss";

const Task = (props) => {
  const { task, index } = props;
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
          {task.name}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
