import React from "react";
import Layout from "../../../layouts";
import DashboardItem from "./ItemDashboard";
import "./dashboard.scss";

const AdminPage = () => {
  const dashboards = [
    {
      name: "process",
    },
    {
      name: "process",
    },
    {
      name: "process",
    },
    {
      name: "process",
    },
    {
      name: "process",
    },
    {
      name: "process",
    },
  ];

  return (
    <Layout>
      <div className="ms-dashboard">
        {dashboards.map((item) => (
          <DashboardItem name={item.name} />
        ))}
      </div>
    </Layout>
  );
};

export default AdminPage;
