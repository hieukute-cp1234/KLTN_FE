import React from "react";
import { Form, Input, AutoComplete } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import Button from "../../../components/common/Button";
import { listWorkflow } from "../../../dataFake";
import "./process.scss";

const { TextArea } = Input;

const CreateAndEditProcess = (props) => {
  const { formCreateEdit } = props;
  const handleSubmitProcess = (value) => {};

  const viewWorkflow = (id) => {};

  const renderItemWorkflow = (name, id) => ({
    value: name,
    label: (
      <div className="item-workflow">
        <span>{name}</span>
        <Button
          text={<FileSearchOutlined />}
          classButton="ms-btn-view"
          click={() => viewWorkflow(id)}
        />
      </div>
    ),
  });

  const options = listWorkflow.map((item) =>
    renderItemWorkflow(item.name, item.id)
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
        <Form.Item label="Work Flow" name="work_flow" rules={[]}>
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
