import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const createProject = async ({ data, actions }) => {
  try {
    await appApi.post("/project", data);
    actions.success();
  } catch (error) {}
};

export const fetchAllProject = createAsyncThunk(
  "project/fetch",
  async (params = {}) => {
    try {
      const res = await appApi.get("/project", { params });
      return res;
    } catch (error) {}
  }
);

export const updateProject = async ({ id, data, success }) => {
  try {
    await appApi.put(`/project/${id}`, data);
    success();
  } catch (error) {}
};

export const deleteProject = async ({ id, success }) => {
  try {
    await appApi.delete(`/project/${id}`);
    success();
  } catch (error) {}
};
