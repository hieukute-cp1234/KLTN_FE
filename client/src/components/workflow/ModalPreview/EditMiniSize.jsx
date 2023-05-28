import React, { useState } from "react";
import { LineOutlined, FullscreenOutlined } from "@ant-design/icons";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Select from "../../common/Select";
import Checkbox from "../../common/Checkbox";
import ColorPicker from "../../common/ColorPicker";
import { valueHandle, listShape } from "../../../constants/options";
import "./preview.scss";

const EditMiniSize = (props) => {
  const {
    changeWorkflow,
    changeNodes,
    changeEdges,
    selectNode,
    selectEdge,
    isSelectEdge,
  } = props;
  const [isMiniSize, setMiniSize] = useState(true);

  const { data: dataNode } = selectNode;

  const handleChangeNameWorkflow = (event) => {
    const value = event.target.value;
    changeWorkflow("workflow_name", value);
  };

  const handleChangeListRole = (value) => {
    changeNodes("listRole", value);
  };

  const handleMiniSize = () => {
    setMiniSize(!isMiniSize);
  };

  const handleChangeTitle = (event) => {
    const value = event.target.value;
    changeNodes("title", value);
  };

  const handleChangeColor = (color) => {
    changeNodes("background", color);
  };

  const handleChangeMention = (event) => {
    const value = event.target.value;
    changeNodes("mention", value);
  };

  const handleChangeTypeShape = (value) => {
    changeNodes("type", value);
  };

  const handleChageTarget = (index, value) => {
    changeNodes("handles", value, index);
  };

  const handleChangeTextEdge = (event) => {
    const value = event.target.value;
    changeEdges("label", value);
  };

  const handleChangeInput = (event) => {
    const value = event.target.value;
    changeNodes("input", value);
  };

  const handleChangeOutput = (event) => {
    const value = event.target.value;
    changeNodes("output", value);
  };

  const handleChangeEffortType = (value) => {
    changeNodes("effortType", value);
  };

  const handleChangeEffort = (value) => {
    changeNodes("effortNumber", value);
  };

  const handleChageChecklist = (index, value) => {
    changeNodes("checkList", value, index);
  };

  const handleChangeRoleNode = (value) => {
    changeNodes("role", value);
  }

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
          <span className="box-editor__full-modal__title">Process Editor</span>
          <Input
            placeholder="Process name..."
            label="Name"
            onChange={handleChangeNameWorkflow}
          />
          <Select
            placeholder="Select role"
            label="Roles"
            options={[]}
            onChange={handleChangeListRole}
          />
          <span className="box-editor__full-modal__title">
            {isSelectEdge ? "Edge" : "Node"} Editor
          </span>
          {isSelectEdge ? (
            <>
              <Input
                placeholder="Text edge"
                label="Text"
                value={selectEdge?.label || ""}
                onChange={handleChangeTextEdge}
              />
            </>
          ) : (
            <>
              <Input
                placeholder="Title node"
                label="Title"
                value={dataNode?.title || ""}
                onChange={handleChangeTitle}
              />
              <Select
                placeholder="Select role"
                label="Role"
                options={[]}
                onChange={handleChangeRoleNode}
              />
              <Input
                placeholder="Input..."
                label="Input"
                value={dataNode?.input || ""}
                onChange={handleChangeInput}
              />
              <Input
                placeholder="Output..."
                label="Output"
                value={dataNode?.title || ""}
                onChange={handleChangeOutput}
              />
              <Select
                placeholder="Mention role"
                label="Mention"
                options={[]}
                onChange={handleChangeMention}
              />
              <Select
                placeholder="Effort..."
                label="Effort"
                options={[]}
                onChange={handleChangeEffortType}
              />
              <Select
                placeholder="Time..."
                label="Time"
                options={[]}
                onChange={handleChangeEffort}
              />
              <Checkbox
                label="Check list"
                options={[]}
                value={[]}
                onChange={handleChageChecklist}
              />

              {/* custom css node */}
              <ColorPicker
                label="Color"
                value={dataNode?.background || "#222"}
                onChangeColor={handleChangeColor}
              />
              <Checkbox
                label="Handles"
                options={valueHandle}
                value={dataNode?.handles || []}
                onChange={handleChageTarget}
              />
              <Checkbox
                label="Target"
                options={valueHandle}
                value={dataNode?.handles || []}
                onChange={handleChageTarget}
              />
              <Select
                placeholder="Shape"
                label="Shape"
                options={listShape}
                value={selectNode.type}
                onChange={handleChangeTypeShape}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EditMiniSize;
