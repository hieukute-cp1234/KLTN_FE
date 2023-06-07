import React, { useState } from "react";
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

  return (
    <div className="process-item">
      <div className="process-item__title">
        <div onClick={() => setDescription(!toggleDescription)}>
          {processData.name}
        </div>
        <div className="process-item__title__actions">
          <Button
            text="Edit"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => onEdit(processData.id)}
          />
          <Button
            text="Copy"
            classButton="ms-btn-copy"
            afterIcon={<CopyOutlined />}
            click={() => onCopy(processData.id)}
          />
          <Button
            text={processData.publish ? "Unpub" : "Publish"}
            classButton="ms-btn-copy"
            afterIcon={<CopyOutlined />}
            click={() => onPublish(processData)}
          />
          <Button
            text="Delete"
            classButton="ms-btn-delete"
            afterIcon={<DeleteOutlined />}
            click={() => onDelete(processData.id)}
          />
        </div>
      </div>
      {toggleDescription && (
        <div className="process-item__description">
          <Descriptions>
            <Descriptions.Item label="Description" span={3}>
              {processData.description}
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
              {processData.roles.join(", ")}
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
