import React, { useState } from "react";
import { LineOutlined, FullscreenOutlined } from "@ant-design/icons";
import Input from "../../common/Input";
import Button from "../../common/Button";
import ColorPicker from "../../common/ColorPicker";
import "./preview.scss";

const EditMiniSize = (props) => {
  const { changeWorkflow, selectNode } = props;
  const [isMiniSize, setMiniSize] = useState(false);

  const { data: dataNode } = selectNode;

  const handleChangeNameWorkflow = (event) => {
    const value = event.target.value;
    changeWorkflow("workflow_name", value);
  };

  const handleChangeListRole = (event) => {
    const value = event.target.value;
    changeWorkflow("list_role", value);
  };

  const handleMiniSize = () => {
    setMiniSize(!isMiniSize);
  };

  const handleChangeNameNode = (event) => {
    const value = event.target.value;
    changeWorkflow("text", value);
  };

  const handleChangeColor = (color) => {
    changeWorkflow("background", color);
  };

  const handleChangeMention = (event) => {
    const value = event.target.value;
    changeWorkflow("mention", value);
  };

  return (
    <div className="box-editor">
      {isMiniSize ? (
        <div className="box-editor__minisize-editor">
          <Button text={<FullscreenOutlined />} click={handleMiniSize} />
        </div>
      ) : (
        <div className="box-editor__full-modal">
          <span
            className="box-editor__full-modal__minisize"
            onClick={handleMiniSize}
          >
            <Button text={<LineOutlined />} />
          </span>
          <span className="box-editor__full-modal__title">Workflow Editor</span>
          <Input
            placeholder="Node name"
            label="List role"
            onChange={handleChangeListRole}
          />
          <Input
            placeholder="Workflow name"
            label="Name"
            onChange={handleChangeNameWorkflow}
          />
          <span className="box-editor__full-modal__title">Node Editor</span>
          <Input
            placeholder="Text node"
            label="Text"
            value={dataNode?.text || ""}
            onChange={handleChangeNameNode}
          />
          <ColorPicker
            label="Color"
            value={dataNode?.background || "#222"}
            onChangeColor={handleChangeColor}
          />
          <Input
            placeholder="Mention role"
            label="Mention"
            onChange={handleChangeMention}
          />
        </div>
      )}
    </div>
  );
};

export default EditMiniSize;
