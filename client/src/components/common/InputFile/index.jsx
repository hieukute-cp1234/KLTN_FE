import React, { useState, useRef } from "react";
import { Input } from "antd";
import "./file.scss";

const InputFile = (props) => {
  const { emitValue } = props;
  const inputRef = useRef(null);

  const [nameFile, setNameFile] = useState("");

  const handleChangeFile = () => {
    inputRef.current.click();
  };

  const handleChooseFile = (event) => {
    const file = event.target.files[0];
    setNameFile(file.name);
    emitValue({ link: null, file: file });
  };

  const handleChangeText = (event) => {
    const value = event.target.value;
    setNameFile(value);
    emitValue({ link: value, file: null });
  };

  return (
    <div className="file">
      <Input
        value={nameFile}
        placeholder="link..."
        onChange={handleChangeText}
      />
      <input
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleChooseFile}
      />
      <button type="button" onClick={handleChangeFile}>
        Upload
      </button>
    </div>
  );
};

export default InputFile;
