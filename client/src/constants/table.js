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
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Start",
      dataIndex: "startDate",
      key: "startDate",
      align: "center",
    },
    {
      title: "End",
      dataIndex: "endDate",
      key: "enđate",
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
      render: (role) => (
        <div className="role-actions">
          <Button
            text="Edit"
            classButton="ms-btn-edit"
            afterIcon={<EditOutlined />}
            click={() => onEdit(role)}
          />
          <Button
            text="Delete"
            classButton="ms-btn-delete"
            afterIcon={<DeleteOutlined />}
            click={() => onDelete(role.id)}
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
