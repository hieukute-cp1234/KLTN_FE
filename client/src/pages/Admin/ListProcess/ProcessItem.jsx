import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Descriptions, Badge } from "antd";
import {
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import Button from "../../../components/common/Button";
import { STATUS_PROCESS } from "../../../constants";
import "./process.scss";

const ProcessItem = (props) => {
  const { processData, onEdit, onCopy, onDelete, onViewWorkflow, onPublish } =
    props;

  const [toggleDescription, setDescription] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const renderStatus = () => {
    switch (processData.status) {
      case STATUS_PROCESS.FREE:
        return "success";
      case STATUS_PROCESS.USING:
        return "warning";
      default:
        return "processing";
    }
  };

  const actions = [
    {
      text: "Edit",
      class: "ms-btn-edit",
      action: () => onEdit(processData.id),
      icon: <EditOutlined />,
      disable: false,
    },
    {
      text: "Copy",
      class: "ms-btn-copy",
      action: () => onCopy(processData.id),
      icon: <CopyOutlined />,
      disable: false,
    },
    {
      text: `${processData.publish ? "Unpub" : "Publish"}`,
      class: "ms-btn-copy",
      action: () => onPublish(processData),
      icon: <CopyOutlined />,
      disable: processData.createByUser?.id !== user.id,
    },
    {
      text: "Delete",
      class: "ms-btn-delete",
      action: () => onDelete(processData.id),
      icon: <DeleteOutlined />,
      disable: false,
    },
  ];

  return (
    <div className="process-item">
      <div className="process-item__title">
        <div onClick={() => setDescription(!toggleDescription)}>
          {processData.name}
        </div>
        <div className="process-item__title__actions">
          {actions.map((button) => (
            <Button
              text={button.text}
              classButton={button.class}
              afterIcon={button.icon}
              click={button.action}
              disabled={button.disable}
            />
          ))}
        </div>
      </div>
      {toggleDescription && (
        <div className="process-item__description">
          <Descriptions>
            <Descriptions.Item label="Description" span={2}>
              {processData.description}
            </Descriptions.Item>
            <Descriptions.Item label="Create by" span={1}>
              {processData.createByUser?.email || ""}
            </Descriptions.Item>
            <Descriptions.Item label="Work Flow">
              <Button
                text="view"
                classButton="ms-btn-view"
                afterIcon={<FileSearchOutlined />}
                click={() => onViewWorkflow(processData)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="List Role">
              {processData.roles.map((role) => role.name).join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Badge status={renderStatus()} text={renderStatus()} />
            </Descriptions.Item>
            <Descriptions.Item label="Create at">
              {processData.createdAt}
            </Descriptions.Item>
            <Descriptions.Item label="Update at">
              {processData.updatedAt}
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}
    </div>
  );
};

export default ProcessItem;
