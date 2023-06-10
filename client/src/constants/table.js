import { NavLink } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Button from "../components/common/Button";
import { USER } from "../constants/routes";

export const columnMyProject = (params) => {
  const { onEdit, onDelete } = params;
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "20%",
      render: (name, data) => (
        <NavLink to={`${USER.MY_PROJECT}/${data.id}`}>{name}</NavLink>
      ),
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
      align: "center",
      render: (manager) => manager.userName,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "20%",
      render: (id, data) => (
        <div className="role-actions">
          <Button
            text="Edit"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => onEdit(data)}
          />
          <Button
            text="Delete"
            classButton="ms-btn-delete"
            afterIcon={<DeleteOutlined />}
            click={() => onDelete(id)}
          />
        </div>
      ),
    },
  ];
};

export const columnRole = (params) => {
  const { onUpdate, onDelete } = params;
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      width: "25%",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      width: "20%",
      render: (id, role) => (
        <div className="role-actions">
          <Button
            text="Edit"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => onUpdate(role)}
          />
          <Button
            text="Delete"
            classButton="ms-btn-delete"
            afterIcon={<DeleteOutlined />}
            click={() => onDelete(id)}
          />
        </div>
      ),
    },
  ];
};

export const columnUser = (params) => {
  const { onEdit } = params;
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      align: "center",
    },
    {
      title: "process by user",
      dataIndex: "processCreated",
      key: "processCreated",
      align: "center",
    },
    {
      title: "process used",
      dataIndex: "processUse",
      key: "processUse",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      align: "center",
      render: (id) => (
        <div className="role-actions">
          <Button
            text="Detail"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => onEdit(id)}
          />
        </div>
      ),
    },
  ];
};
