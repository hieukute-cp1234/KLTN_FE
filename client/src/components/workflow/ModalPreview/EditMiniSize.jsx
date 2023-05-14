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

  const handleChangeListRole = (event) => {
    const value = event.target.value;
    changeWorkflow("list_role", value);
  };

  const handleMiniSize = () => {
    setMiniSize(!isMiniSize);
  };

  const handleChangeNameNode = (event) => {
    const value = event.target.value;
    changeNodes("text", value);
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
              <Select
                placeholder="Mention role"
                label="Mention"
                options={[]}
                onChange={handleChangeMention}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EditMiniSize;
