import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const fetchRoles = createAsyncThunk(
  "role/fetch",
  async ({ actions }) => {
    try {
      const response = await appApi.get("/role");
      actions.success(response);
      return response;
    } catch (error) {}
  }
);

export const createRole = createAsyncThunk(
  "role/create",
  async ({ data, actions }) => {
    try {
      const response = await appApi.post("/role", data);
      actions.success(response);
      return response;
    } catch (error) {}
  }
);

export const updateRole = createAsyncThunk(
  "role/update",
  async ({ id, data, actions }) => {
    try {
      const res = await appApi.put(`/role/${id}`, data);
      actions.success();
      return res;
    } catch (error) {}
  }
);

export const deleteRole = createAsyncThunk(
  "role/delete",
  async ({ id, actions }) => {
    try {
      const res = await appApi.delete(`/role/${id}`);
      actions.success();
      return res;
    } catch (error) {}
  }
);
