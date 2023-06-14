import React from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Button from "../../../components/common/Button";
import "./detail.scss";

const ProcessTask = (props) => {
  const { nodes = [], tasks = [], onAddTask } = props;
  return (
    <div className="process-task">
      {nodes.map((node) => (
        <div key={node.id} className="process-task__item">
          <div
            className="process-task__item__header"
            style={{ background: node?.background || "transparent" }}
          >
            <div className="process-task__item__header__title">
              {node.title}
            </div>
            <Button
              text={<PlusOutlined />}
              classButton="ms-btn-icon"
              click={() => onAddTask(node.id)}
            />
          </div>
          <div className="process-task__item__wrapper-task">
            {tasks.length ? (
              tasks
                .filter((task) => task.processStep === node.id)
                .map((task) => (
                  <div className="process-task__item__wrapper-task__task">
                    <div className="process-task__item__wrapper-task__task__actions">
                      <Button
                        text={<EditOutlined />}
                        classButton="ms-btn-icon"
                        click={() => onAddTask(node.id)}
                      />
                      <Button
                        text={<DeleteOutlined />}
                        classButton="ms-btn-icon"
                        click={() => onAddTask(node.id)}
                      />
                    </div>
                    {task.name}
                  </div>
                ))
            ) : (
              <div className="process-task__item__wrapper-task__no-data">
                Chưa có công việc nào trong step này
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTask;
