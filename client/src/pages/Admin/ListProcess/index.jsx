import React, { useState, useEffect } from "react";
import { List } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import ProcessItem from "./ProcessItem";
import PreviewWorkflow from "./PreviewWorkFlow";
import {
  fetchListProcess,
  copyProcess,
  publishProcess,
  deleteProcess,
} from "../../../store/process/actions";
import "./process.scss";

const ListProcess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleViewWorkflow, setViewWorkflow] = useState(false);
  const [process, setProcess] = useState({});

  const listProcess = useSelector((state) => state.process.listProcess);

  useEffect(() => {
    dispatch(fetchListProcess({ params: {} }));
  }, [dispatch]);

  const handleEditProcess = (processId) => {
    navigate(`/admin/process/update/${processId}`);
  };

  const handleCopyProcess = (processId) => {
    dispatch(
      copyProcess({
        id: processId,
        actions: {
          success: () => {
            dispatch(fetchListProcess({ params: {} }));
          },
        },
      })
    );
  };

  const handlePublishProcess = (process) => {
    dispatch(
      publishProcess({
        id: process.id,
        publish: process.publish === 1 ? 0 : 1,
        actions: {
          success: () => {
            console.log("success");
          },
        },
      })
    );
  };

  const handleDeleteProcess = async (id) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Bạn có chắc chắn xóa!",
      showCancelButton: true,
    });
    if (!result.isConfirmed) return;
    dispatch(
      deleteProcess({
        id,
        actions: {
          success: () => {
            dispatch(fetchListProcess({ params: {} }));
          },
        },
      })
    );
  };

  const handleViewWorkflow = (process) => {
    setProcess(process);
    setViewWorkflow(true);
  };

  return (
    <Layout>
      <List
        dataSource={listProcess}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <ProcessItem
              processData={item}
              onEdit={handleEditProcess}
              onCopy={handleCopyProcess}
              onDelete={handleDeleteProcess}
              onPublish={handlePublishProcess}
              onViewWorkflow={handleViewWorkflow}
            />
          </List.Item>
        )}
      />
      <PreviewWorkflow
        open={toggleViewWorkflow}
        name={process.name}
        dataDiagrams={process}
        onCancel={() => setViewWorkflow(false)}
      />
    </Layout>
  );
};

export default ListProcess;
