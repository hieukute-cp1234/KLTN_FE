import React from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Button from "../../../components/common/Button";
import { deleteTask } from "../../../store/task/actions";
import { formatDate } from "../../../helpers";
import { styleType, styleStatus } from "../../../helpers/status";
import { USER } from "../../../constants/routes";
import "./detail.scss";
import Swal from "sweetalert2";

const ProcessTask = (props) => {
  const { nodes = [], tasks = [], onAddTask, onEditTask } = props;

  const onDeleteTask = async (id) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Bạn có chắc chắn xóa!",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;
    await deleteTask({ id });
  };

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
            {tasks.filter((task) => task.processStep === node.id).length ? (
              tasks
                .filter((task) => task.processStep === node.id)
                .map((task) => (
                  <div className="process-task__item__wrapper-task__task">
                    <div className="process-task__item__wrapper-task__task__actions">
                      <div>
                        <span
                          style={{
                            backgroundColor: styleType(task.type).background,
                          }}
                        >
                          {styleType(task.type).text}
                        </span>
                        <span
                          style={{
                            backgroundColor: styleStatus(task.status)
                              .background,
                          }}
                        >
                          {styleStatus(task.status).text}
                        </span>
                      </div>
                      <div>
                        <Button
                          text={<EditOutlined />}
                          classButton="ms-btn-icon"
                          click={() => onEditTask(task)}
                        />
                        <Button
                          text={<DeleteOutlined />}
                          classButton="ms-btn-icon"
                          click={() => onDeleteTask(task.id)}
                        />
                      </div>
                    </div>
                    <div className="process-task__item__wrapper-task__task__name">
                      <NavLink to={`${USER.MY_TASK}/${task.id}`}>
                        {task.name}
                      </NavLink>
                    </div>
                    <div className="process-task__item__wrapper-task__task__mention">
                      Mention: {task.mention.userName}
                    </div>
                    <div className="process-task__item__wrapper-task__task__mention">
                      Created at:{" "}
                      {`${formatDate(task.createdAt)}`}
                    </div>
                  </div>
                ))
            ) : (
              <div className="process-task__item__wrapper-task__no-data">
                There is no work in this step!
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTask;
