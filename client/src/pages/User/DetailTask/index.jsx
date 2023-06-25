import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Descriptions, List, Avatar } from "antd";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { fetchTaskById } from "../../../store/task/actions";
import Layout from "../../../layouts";
import ChatItem from "./ChatItem";
import { styleType, styleStatus } from "../../../helpers/status";
import { SOCKET_HOST } from "../../../constants/config";
import { formatDate, formatTime } from "../../../helpers";
import "./detail-task.scss";

const DetailTask = () => {
  const { taskId } = useParams();
  const socket = useRef();
  const [detail, setDetail] = useState({});
  const [listMessage, setListMessage] = useState([]);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    socket.current = io(SOCKET_HOST);
    socket.current.connect();

    socket.current.on("chatFeegback", (message) => {
      const currentUser = message.createByUser.id;
      if (currentUser !== user.id) {
        setListMessage([...listMessage, message]);
      }
    });
  }, []);

  useEffect(() => {
    fetchTaskById({
      id: taskId,
      success: (data) => {
        setDetail(data);
        setListMessage(data.messages);
        console.log(data.messages);
      },
    });
  }, []);

  const getAvatar = (name) => {
    return name ? name[0].toUpperCase() : "";
  };

  const handleChat = (value) => {
    const newMessage = {
      text: value,
      type: "text",
      createByUser: user,
      taskId: taskId,
    };
    socket.current.emit("userChat", newMessage);
    setListMessage([...listMessage, newMessage]);
  };

  return (
    <Layout>
      <div className="detail-task">
        <div className="detail-task__title">{detail.name}</div>
        <div className="detail-task__content">
          <Descriptions>
            <Descriptions.Item label="Type" span={1}>
              <span
                className="detail-task__content__status"
                style={{
                  backgroundColor: styleType(1).background,
                }}
              >
                {styleType(detail.type).text}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              <span
                className="detail-task__content__status"
                style={{
                  backgroundColor: styleStatus(1).background,
                }}
              >
                {styleStatus(detail.status).text}
              </span>
            </Descriptions.Item>
            <Descriptions.Item label="Create by" span={1}>
              {detail.manager?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Assign" span={2}>
              {detail.mention?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Project" span={1}>
              {detail.project?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Process Step" span={2}>
              {detail.processStep?.title}
            </Descriptions.Item>
            <Descriptions.Item label="Create at" span={1}>
              {detail.createdAt}
            </Descriptions.Item>
            <Descriptions.Item label="Due date" span={2}>
              {detail.updatedAt}
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {detail.description}
            </Descriptions.Item>
          </Descriptions>
        </div>
        <div className="detail-task__chat-box">
          <List
            dataSource={listMessage}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar>{getAvatar(item.createByUser?.userName)}</Avatar>
                  }
                  title={
                    <div>
                      Date: {formatDate(item.createdAt)} Time:
                      {formatTime(item.createdAt)}
                    </div>
                  }
                  description={item.text}
                />
              </List.Item>
            )}
          />
          <ChatItem userName={user.userName} onChatMessage={handleChat} />
        </div>
      </div>
    </Layout>
  );
};

export default DetailTask;
