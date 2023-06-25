import React, { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import "./detail-task.scss";

const ChatItem = (props) => {
  const { onChatMessage, userName } = props;

  const [text, setText] = useState("");

  const getAvatar = (name) => {
    return name ? name[0] : "";
  };

  const handleChangeText = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      onChatMessage(text);
      setText("");
    }
  };

  const clickSend = () => {
    onChatMessage(text);
    setText("");
  };

  return (
    <div className="chat-item">
      <div className="chat-item__avatar">{getAvatar(userName)}</div>
      <input value={text} onChange={handleChangeText} onKeyDown={handleEnter} />
      <div className="chat-item__send" onClick={clickSend}>
        <SendOutlined />
      </div>
    </div>
  );
};

export default ChatItem;
