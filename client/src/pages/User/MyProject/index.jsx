import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Modal } from "antd";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import CreateProject from "./CreateProject";
import PreviewProcess from "../../../components/workflow/ModalPreview";
import { listProject } from "../../../dataFake";
import { columnMyProject } from "../../../constants/table";
import { toggleModalAddProject } from "../../../store/project";
import { diagrams } from "../../../dataFake";
import "./my-project.scss";

const PageMyProject = () => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [togglePreviewProcess, setTogglePreviewProcess] = useState(false);

  const isModalAddProcess = useSelector((state) => state.project.isAddProject);

  const openModalEdit = () => {
    setEdit(true);
    dispatch(toggleModalAddProject(true));
  };

  const handelClose = () => {
    setEdit(false);
    dispatch(toggleModalAddProject(false));
  };

  const handleDeleteRole = () => {
    Swal.fire({
      icon: "question",
      text: "Bạn có chắc chắn xóa!",
      showCancelButton: true,
    });
  };

  const handlePreviewProcess = (id) => {
    setTogglePreviewProcess(true);
  };

  return (
    <Layout>
      <Table
        columns={columnMyProject({
          onEdit: openModalEdit,
          onDelete: handleDeleteRole,
        })}
        dataSource={listProject}
      />
      <Modal
        title={`${isEdit ? "Update" : "Create"} project`}
        footer={null}
        open={isModalAddProcess}
        onCancel={handelClose}
      >
        <CreateProject
          onCancel={handelClose}
          onViewProcess={handlePreviewProcess}
        />
      </Modal>
      <PreviewProcess
        open={togglePreviewProcess}
        dataDiagrams={diagrams}
        onCancel={() => setTogglePreviewProcess(false)}
      />
    </Layout>
  );
};

export default PageMyProject;
