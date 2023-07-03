import React, { useState, useRef } from "react";
import {
  SendOutlined,
  PaperClipOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import "./detail-task.scss";

const ChatItem = (props) => {
  const { onChatMessage, userName } = props;
  const inputImage = useRef(null);
  const inputFile = useRef(null);
  const [sendValue, setSendValue] = useState({ text: "", file: [], img: [] });

  const getAvatar = (name) => {
    return name ? name[0] : "";
  };

  const handleChangeText = (e) => {
    const value = e.target.value;
    setSendValue({ ...sendValue, text: value });
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      onChatMessage(sendValue);
      setSendValue({ text: "", file: [], img: [] });
    }
  };

  const clickSend = () => {
    onChatMessage(sendValue);
    setSendValue({ text: "", file: [], img: [] });
  };

  const uploadImage = () => {
    if (sendValue.file.length) return;
    inputImage.current.click();
  };

  const handleChageImage = (e) => {
    const files = e.target.files;
    setSendValue({ ...sendValue, file: [], img: [...files] });
  };

  const renderUrlFile = (file) => {
    const url = URL.createObjectURL(file);
    return url;
  };

  const handleClearImage = (index) => {
    const newFiles = sendValue.img.filter((_file, i) => i !== index);
    setSendValue({ ...sendValue, file: [], img: newFiles });
  };

  const uploadFile = () => {
    if (sendValue.img.length) return;
    inputFile.current.click();
  };

  const handleChageFile = (e) => {
    const files = e.target.files;
    setSendValue({ ...sendValue, file: [...files], img: [] });
  };

  const handleClearFile = (index) => {
    const newFiles = sendValue.file.filter((_file, i) => i !== index);
    setSendValue({ ...sendValue, file: newFiles, img: [] });
  };

  return (
    <div className="chat-item">
      <div className="chat-item__avatar">{getAvatar(userName)}</div>
      <div className="chat-item__text">
        <input
          value={sendValue.text}
          onChange={handleChangeText}
          onKeyDown={handleEnter}
          placeholder="content chat..."
        />
        <input
          className="input-hide"
          type="file"
          multiple
          accept="image/*"
          ref={inputImage}
          onChange={handleChageImage}
        />
        <input
          className="input-hide"
          type="file"
          multiple
          ref={inputFile}
          onChange={handleChageFile}
        />
        {!!sendValue.file.length && (
          <div className="wrapper_image">
            {sendValue.file.map((file, index) => (
              <div className="chat-item__text__file">
                <button
                  className="chat-item__text__file__close"
                  onClick={() => handleClearFile(index)}
                >
                  x
                </button>
                <div>{file.name}</div>
              </div>
            ))}
          </div>
        )}
        {!!sendValue.img.length && (
          <div className="wrapper_image">
            {sendValue.img.map((file, index) => (
              <div className="chat-item__text__image">
                <button
                  className="chat-item__text__image__close"
                  onClick={() => handleClearImage(index)}
                >
                  x
                </button>
                <img src={renderUrlFile(file)} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="chat-item__send" onClick={uploadImage}>
        <PictureOutlined />
      </div>
      <div className="chat-item__send" onClick={uploadFile}>
        <PaperClipOutlined />
      </div>
      <div
        className="chat-item__send"
        style={{ paddingLeft: "0.2rem" }}
        onClick={clickSend}
      >
        <SendOutlined />
      </div>
    </div>
  );
};

export default ChatItem;
