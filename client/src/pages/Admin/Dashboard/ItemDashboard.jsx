import React from "react";
import { OrderedListOutlined, SnippetsOutlined } from "@ant-design/icons";
import "./dashboard.scss";

const DashboradItem = ({ name }) => {
  return (
    <div className="ms-item-dashboard">
      <div className="ms-item-dashboard__title">{name}</div>
      <div className="ms-item-dashboard__content">content</div>
      <div className="ms-item-dashboard__footer">
        <div className="ms-item-dashboard__footer__item">
          list <OrderedListOutlined />
        </div>
        <div className="ms-item-dashboard__footer__item">
          detail <SnippetsOutlined />
        </div>
      </div>
    </div>
  );
};

export default DashboradItem;
