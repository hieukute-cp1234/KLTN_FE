import React, { useState } from "react";
import { Tabs, Descriptions, Badge, Tree } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import Layout from "../../../layouts";
import Button from "../../../components/common/Button";
import "./detail.scss";

const initialItems = [
  {
    label: "Tab 1",
    children: <div style={{ color: "red", minHeight: 400, width: '100%' }}>hieukute</div>,
    key: "1",
  },
  {
    label: "Tab 2",
    children: "Content of Tab 2",
    key: "2",
  },
  {
    label: "Tab 3",
    children: "Content of Tab 3",
    key: "3",
    closable: false,
  },
];

const treeData = [
  {
    title: "Design",
    key: "0-0",
    children: [
      {
        title: "Admin",
        key: "0-0-0",
      },
      {
        title: "User",
        key: "0-0-1",
      },
    ],
  },
  {
    title: "Data Base",
    key: "0-1",
    children: [
      {
        title: "Spec",
        key: "0-1-0",
      },
      {
        title: "Doc API",
        key: "0-1-1",
      },
    ],
  },
];

const renderContent = (props, DefaultTabBar) => {
  console.log(props, DefaultTabBar);
  return <div>hieukute</div>;
};

const PageDetailUser = () => {
  const onViewWorkflow = () => {};

  return (
    <Layout>
      <p className="project__name">LisB</p>
      <div className="project__detail">
        <Descriptions>
          <Descriptions.Item label="Work Flow" span={1}>
            <Button
              text="view"
              classButton="ms-btn-view"
              afterIcon={<FileSearchOutlined />}
              click={() => onViewWorkflow("view")}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Member" span={1}>
            <Button
              text="view"
              classButton="ms-btn-view"
              afterIcon={<FileSearchOutlined />}
              click={() => onViewWorkflow("view")}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={1}>
            <Badge status="success" text="start" />
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            abc
          </Descriptions.Item>
          <Descriptions.Item label="Document" span={3}>
            <Tree
              multiple
              showLine
              rootClassName="custom-tree"
              // onSelect={onSelect}
              // onExpand={onExpand}
              treeData={treeData}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Start at">dsdsd</Descriptions.Item>
          <Descriptions.Item label="End at">sdsdsds</Descriptions.Item>
        </Descriptions>
      </div>
      <div className="project__process">
        <Tabs items={initialItems} />
      </div>
    </Layout>
  );
};

export default PageDetailUser;
