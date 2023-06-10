import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Modal, Form } from "antd";
import Swal from "sweetalert2";
import Layout from "../../../layouts";
import CreateProject from "./CreateProject";
import PreviewProcess from "../../../components/workflow/ModalPreview";
import { columnMyProject } from "../../../constants/table";
import { toggleModalAddProject } from "../../../store/project";
import { fetchAllProject, deleteProject } from "../../../store/project/actions";
import { fetchListProcess } from "../../../store/process/actions";
import { convertDate } from "../../../helpers";
import "./my-project.scss";

const PageMyProject = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [isEdit, setEdit] = useState(false);
  const [togglePreviewProcess, setTogglePreviewProcess] = useState(false);
  const [selectProject, setSelectProject] = useState("");
  const [diagrams, setDiagrams] = useState({});

  const isModalAddProcess = useSelector((state) => state.project.isAddProject);
  const listProject = useSelector((state) => state.project.listProject);
  const listProcess = useSelector((state) => state.process.listProcess);

  useEffect(() => {
    if (!listProject.length) {
      dispatch(fetchAllProject());
    }

    if (!listProcess.length) {
      dispatch(fetchListProcess({ params: {} }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModalEdit = (value) => {
    setEdit(true);
    const processSelected = listProcess.find(
      (process) => process.id === value.process
    );
    const fillValue = {
      ...value,
      process: processSelected?.name,
      endDate: convertDate(value.endDate),
    };
    setSelectProject(value.id);
    form.setFieldsValue(fillValue);
    dispatch(toggleModalAddProject(true));
  };

  const handelClose = () => {
    setEdit(false);
    form.resetFields();
    setSelectProject("");
    dispatch(toggleModalAddProject(false));
  };

  const handleDeleteRole = async (id) => {
    const result = await Swal.fire({
      icon: "question",
      text: "Bạn có chắc chắn xóa!",
      showCancelButton: true,
    });

    if (!result.isConfirmed) return;

    await deleteProject({
      id,
      success: () => {
        dispatch(fetchAllProject());
        handelClose();
      },
    });
  };

  const handlePreviewProcess = (id) => {
    setDiagrams(listProcess.find((process) => process.id === id));
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
          form={form}
          editor={isEdit}
          projectSelected={selectProject}
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
