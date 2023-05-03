import React from "react";
import Input from "../../common/Input";
import "./preview.scss";

const EditMiniSize = (props) => {
  const { onMinisize } = props;
  const handleChangeNameWorkflow = (event) => {
    const value = event.target.value;
  };

  const handleBlurWorkflow = (event) => {
    const value = event.target.value;
  };
  return (
    <div className="box-editor">
      <div className="box-editor__minisize-editor">edit</div>
      <div className="box-editor__full-modal">
        <span className="full-modal__minisize" onClick={onMinisize}>
          _
        </span>
        <span className="box-editor__full-modal__title">Workflow Editor</span>
        <Input placeholder="Node name" label="List role" />
        <Input
          placeholder="Workflow name"
          label="Name"
          onChange={handleChangeNameWorkflow}
          onBlur={handleBlurWorkflow}
        />
        <span className="box-editor__full-modal__title">Node Editor</span>
        <Input placeholder="Node name" label="Name" />
        <Input placeholder="Color" label="Color" />
        <Input placeholder="Mention role" label="Mention" />
      </div>
    </div>
  );
};

export default EditMiniSize;
