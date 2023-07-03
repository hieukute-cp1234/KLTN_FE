import React from "react";
import { useNavigate, useMatch } from "react-router-dom";
import { PlusCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAddRole } from "../store/role";
import { toggleModalAddUser, changeKeySearch } from "../store/auth";
import { fetchListProcess } from "../store/process/actions";
import { toggleModalAddProject } from "../store/project";
import { fetchAllProject } from "../store/project/actions";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { ADMIN, USER } from "../constants/routes";
import "./layout.scss";

const Header = ({ namePage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRole = !!useMatch(ADMIN.LIST_ROLE);
  const isUser = !!useMatch(ADMIN.LIST_USER);
  const isProject = !!useMatch(USER.MY_PROJECT);

  const pageListProcess = !!useMatch(ADMIN.PROCESS);

  const search = useSelector((state) => state.auth.keySearch);

  const pageUpdateProcess = !!useMatch(ADMIN.UPDATE_PROCESS);
  const pageCreateProcess = !!useMatch(ADMIN.CREATE_PROCESS);
  const pageTask = !!useMatch(USER.MY_TASK);
  const pageDetailProject = !!useMatch(USER.DETAIL_PROJECT);
  const pageDetailTask = !!useMatch(USER.DETAIL_TASK);

  const routeNotSearch =
    pageUpdateProcess || pageCreateProcess;

  const routeNotAdd = pageDetailTask || pageTask || pageDetailProject;

  const handleAddByPage = () => {
    switch (true) {
      case isRole:
        dispatch(toggleModalAddRole(true));
        return;
      case isUser:
        dispatch(toggleModalAddUser(true));
        return;
      case isProject:
        dispatch(toggleModalAddProject(true));
        return;
      default:
        navigate(ADMIN.CREATE_PROCESS);
        return;
    }
  };

  const handleChangeKeySearch = (event) => {
    const value = event.target.value;
    dispatch(changeKeySearch(value));
  };

  const handleEnter = (event) => {
    if (event.code === "Enter") {
      const params = search ? { search } : {};
      switch (true) {
        case pageListProcess:
          dispatch(fetchListProcess({ params }));
          return;
        default:
          dispatch(fetchAllProject(params));
          return;
      }
    }
  };

  return (
    <div className="ms-header">
      <div>{namePage}</div>
      {!routeNotAdd && (
        <div className="ms-header__search">
          {!routeNotSearch && (
            <Input
              placeholder="search..."
              value={search}
              beforeIcon={<SearchOutlined />}
              onChange={handleChangeKeySearch}
              onKeyDown={handleEnter}
            />
          )}
          <Button
            text="Add"
            classButton="ms-btn-create"
            beforeIcon={<PlusCircleOutlined />}
            click={handleAddByPage}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
