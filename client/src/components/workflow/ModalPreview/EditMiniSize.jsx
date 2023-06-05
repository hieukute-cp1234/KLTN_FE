import React, { useState, useEffect } from "react";
import { LineOutlined, FullscreenOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../../../store/role/actions";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Select from "../../common/Select";
import Checkbox from "../../common/Checkbox";
import ColorPicker from "../../common/ColorPicker";
import { valueHandle, listShape, typeEffort } from "../../../constants/options";
import { convertEffortByType } from "../../../helpers";
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
  const dispatch = useDispatch();

  const [isMiniSize, setMiniSize] = useState(true);
  const [valueEffort, setValueEffort] = useState(0);
  const [valueOnlyRole, setValueOnlyRole] = useState([]);

  const listRole = useSelector((state) => state.role.listRole);

  useEffect(() => {
    if (!listRole?.length) {
      dispatch(fetchRoles({ actions: { success: () => {} } }));
    }
  }, [dispatch, listRole]);

  const { data: dataNode } = selectNode;

  const handleChangeNameWorkflow = (event) => {
    const value = event.target.value;
    changeWorkflow("workflow_name", value);
  };

  const handleChangeListRole = (value) => {
    const newRoleProcess = listRole.filter((role) => value.includes(role.id));
    setValueOnlyRole(newRoleProcess);
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
    setValueEffort(value);
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
          <span className="box-editor__full-modal__title">Process Editor</span>
          <Input
            placeholder="Process name..."
            label="Name"
            onChange={handleChangeNameWorkflow}
          />
          <Select
            placeholder="Select role"
            label="Roles"
            multiple
            options={listRole.map((role) => ({
              text: role.code,
              value: role.id,
            }))}
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
                options={valueOnlyRole.map((role) => ({
                  text: role.code,
                  value: role.id,
                }))}
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
                placeholder="Effort..."
                label="Effort"
                options={typeEffort}
                onChange={handleChangeEffortType}
              />
              <Select
                placeholder="Time..."
                label="Time"
                options={convertEffortByType(valueEffort)}
                onChange={handleChangeEffort}
              />
              {/* <Checkbox
                label="Check list"
                options={[]}
                value={[]}
                onChange={handleChageChecklist}
              /> */}

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
