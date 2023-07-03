import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Descriptions, List, Avatar, Image, Calendar, Modal } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import dayjs from "dayjs";
import {
  fetchTaskById,
  uploadMultipleFile,
  updateTask,
} from "../../../store/task/actions";
import Layout from "../../../layouts";
import ChatItem from "./ChatItem";
import Button from "../../../components/common/Button";
import { styleType, styleStatus } from "../../../helpers/status";
import { SOCKET_HOST, BASE_URL_FILE } from "../../../constants/config";
import { formatTime, formatDate, convertDate } from "../../../helpers";
import "./detail-task.scss";

const DetailTask = () => {
  const { taskId } = useParams();
  const socket = useRef();
  const scrollView = useRef();

  const [detail, setDetail] = useState({});
  const [listMessage, setListMessage] = useState([]);
  const [toggleDueDate, setToggleDueDate] = useState(false);
  const [dueDate, setDueDate] = useState("");

  const currentUserId = localStorage.getItem("user");
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    socket.current = io(SOCKET_HOST);
    socket.current.connect();

    socket.current.on("chatFeedback", (message) => {
      const currentUser = message.createByUser.id;
      if (currentUser !== currentUserId) {
        setListMessage([...listMessage, message]);
      }
    });
  }, []);

  useEffect(() => {
    fetchTaskById({
      id: taskId,
      success: (data) => {
        setDetail(data);
        setDueDate(convertDate(data.dueDate));
        setListMessage(data.messages);
      },
    });
    scrollView.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const getAvatar = (name) => {
    return name ? name[0].toUpperCase() : "";
  };

  const handleChat = async (value) => {
    const formData = new FormData();
    let type = "text";
    if (value.file.length) {
      type = "file";
      value.file.forEach((file) => {
        formData.append("files", file);
      });
    }

    if (value.img.length) {
      type = "image";
      value.img.forEach((file) => {
        formData.append("files", file);
      });
    }

    const newMessage = {
      ...value,
      type: type,
      createByUser: user,
      taskId: taskId,
      files: [],
      createdAt: "",
    };

    await uploadMultipleFile({
      data: formData,
      success: (data) => {
        newMessage.files = data;
        newMessage.createdAt = new Date();
        delete newMessage.img;
        delete newMessage.file;
        setListMessage([...listMessage, newMessage]);
        socket.current.emit("userChat", newMessage);
      },
    });
  };

  const handleDownload = async (type, name) => {
    if (type !== "image") return;
    const link = document.createElement("a");
    link.setAttribute("download", name);
    link.setAttribute(
      "href",
      await fetch(`${BASE_URL_FILE}${name}`)
        .then((res) => res.blob())
        .then((blob) => URL.createObjectURL(blob))
    );
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleCloseDueDate = () => {
    setToggleDueDate(false);
  };

  const handleSubmitDueDate = async () => {
    await updateTask({
      id: detail.id,
      data: {
        dueDate: formatDate(dueDate),
      },
      success: (message) => {
        setListMessage([...listMessage, message]);
      },
    });
    setToggleDueDate(false);
  };

  const handleChangeDueDate = (date) => {
    setDueDate(date);
  };

  const disabledDate = (date) => {
    const now = new Date();
    return dayjs(date).isBefore(dayjs(now));
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
              {formatDate(detail.createdAt)}
            </Descriptions.Item>
            <Descriptions.Item label="Due date" span={2}>
              {formatDate(dueDate)}{" "}
              <Button
                text={<CalendarOutlined />}
                click={() => setToggleDueDate(true)}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>
              {detail.description}
            </Descriptions.Item>
          </Descriptions>
        </div>
        <div className="detail-task__chat-box">
          <div className="ms-scroll" ref={scrollView}>
            <List
              dataSource={listMessage}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar>{getAvatar(item.createByUser?.userName)}</Avatar>
                    }
                    title={
                      <div className="detail-task__chat-box__title">
                        <span className="detail-task__chat-box__title__email">
                          {item.createByUser.email}
                        </span>
                        <span className="detail-task__chat-box__title__time">
                          {formatTime(item.createdAt)}
                        </span>
                      </div>
                    }
                    description={
                      <div className="detail-task__chat-box__description">
                        <span className="detail-task__chat-box__description__text">
                          {item.text}
                        </span>
                        <div className="detail-task__chat-box__description__link">
                          {item.files.map((file) =>
                            item.type === "image" ? (
                              <span
                                className="link-download"
                                onClick={() => handleDownload(item.type, file)}
                              >
                                {file}
                              </span>
                            ) : (
                              <a download href={`${BASE_URL_FILE}${file}`}>
                                {file}
                              </a>
                            )
                          )}
                        </div>
                        {item.type === "image" && (
                          <div className="detail-task__chat-box__description__image">
                            {item.files.map((file) => (
                              <Image
                                src={`${BASE_URL_FILE}${file}`}
                                width={100}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
          <ChatItem userName={user.userName} onChatMessage={handleChat} />
        </div>
        <Modal
          title="Due Date"
          open={toggleDueDate}
          onCancel={handleCloseDueDate}
          onOk={handleSubmitDueDate}
        >
          <Calendar
            fullscreen={false}
            onChange={handleChangeDueDate}
            value={dueDate}
            disabledDate={disabledDate}
          />
        </Modal>
      </div>
    </Layout>
  );
};

export default DetailTask;
