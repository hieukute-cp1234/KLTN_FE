import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button } from "antd";
import InputFile from "../../../components/common/InputFile";
import { uploadFile } from "../../../store/task/actions";
import "./detail.scss";

const CreateTask = (props) => {
  const { onCancel, form, editor, updateDocument } = props;
  const { projectId } = useParams();
  const [dataFile, setDataFile] = useState();

  const handleSubmit = async (value) => {
    const formData = new FormData();
    formData.append("label", value.name);
    formData.append("file", dataFile.file);
    formData.append("link", dataFile.link);
    formData.append("projectId", projectId);
    await uploadFile({
      data: formData,
      success: (res) => {
        onCancel();
        updateDocument(res.document);
      },
    });
  };

  const changeValue = (value) => {
    setDataFile(value);
  };

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 16,
      }}
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Document name..." />
      </Form.Item>

      <Form.Item
        label="File"
        name="file"
      >
        <InputFile emitValue={changeValue} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          {editor ? "Update" : "Create"}
        </Button>
        <Button type="primary" style={{ marginLeft: 10 }} onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
