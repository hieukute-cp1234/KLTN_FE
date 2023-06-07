import { createAsyncThunk } from "@reduxjs/toolkit";
import { appApi } from "../../configs/axios";

export const getRandomId = async () => {
  try {
    const res = await appApi.get("random-id");
    return res;
  } catch (error) {}
};

export const fetchListProcess = createAsyncThunk(
  "process/list",
  async ({ params }) => {
    try {
      const res = await appApi.get("/process", { params });
      return res;
    } catch (error) {}
  }
);

export const fetchProcessById = createAsyncThunk(
  "process/detail",
  async ({ id, actions }) => {
    try {
      const res = await appApi.get(`/process/${id}`);
      actions.success(res);
      return res;
    } catch (error) {}
  }
);

export const createProcess = createAsyncThunk(
  "process/create",
  async ({ data, actions }) => {
    try {
      await appApi.post("/process", data);
      actions.success();
    } catch (error) {}
  }
);

export const copyProcess = createAsyncThunk(
  "process/copy",
  async ({ id, actions }) => {
    try {
      const res = await appApi.post(`/process/${id}`);
      actions.success();
      return res;
    } catch (error) {}
  }
);

export const publishProcess = createAsyncThunk(
  "process/publish",
  async ({ id, publish, actions }) => {
    try {
      const res = await appApi.put(`/publish-process/${id}`, { publish });
      actions.success();
      return res;
    } catch (error) {}
  }
);

export const deleteProcess = createAsyncThunk(
  "process/delete",
  async ({ id, actions }) => {
    try {
      const res = await appApi.delete(`/process/${id}`);
      actions.success();
      return res;
    } catch (error) {}
  }
);

export const updateProcess = createAsyncThunk(
  "process/update",
  async ({ id, data, actions }) => {
    try {
      const res = await appApi.put(`/process/${id}`, data);
      actions.success();
      return res;
    } catch (error) {}
  }
);
