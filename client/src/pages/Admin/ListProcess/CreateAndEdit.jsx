import React from "react";
import { Form, Input, AutoComplete } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import Button from "../../../components/common/Button";
import { listWorkFollow } from "../../../dataFake";
import "./process.scss";

const { TextArea } = Input;

const CreateAndEditProcess = (props) => {
  const { formCreateEdit } = props;
  const handleSubmitProcess = (value) => {
    console.log(value);
  };

  const viewWorkFollow = (id) => {
    console.log(id);
  };

  const renderItemWorkfollow = (name, id) => ({
    value: name,
    label: (
      <div className="item-workfollow">
        <span>{name}</span>
        <Button
          text={<FileSearchOutlined />}
          classButton="ms-btn-view"
          click={viewWorkFollow(id)}
        />
      </div>
    ),
  });

  const options = listWorkFollow.map((item) =>
    renderItemWorkfollow(item.name, item.id)
  );

  return (
    <div className="ms-create">
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={formCreateEdit}
        onFinish={handleSubmitProcess}
      >
        <Form.Item label="Name" name="name" rules={[]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Work Follow" name="work_follow" rules={[]}>
          <AutoComplete options={options} />
        </Form.Item>
        <Form.Item label="Roles" name="roles" rules={[]}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAndEditProcess;
