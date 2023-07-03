import { appApi } from "../../configs/axios";

export const fetchTaskByProject = async ({ params, actions }) => {
  try {
    const res = await appApi.get("/task", { params });
    actions.success(res);
  } catch (error) {}
};

export const fetchTaskById = async ({ id, success }) => {
  try {
    const res = await appApi.get(`/task/${id}`);
    success(res);
  } catch (error) {}
};

export const createTask = async ({ data, actions }) => {
  try {
    const res = await appApi.post("/task", data);
    actions.success(res);
  } catch (error) {}
};

export const deleteTask = async ({ id }) => {
  try {
    await appApi.delete(`/task/${id}`);
  } catch (error) {}
};

export const updateStatusTask = async ({ id, data }) => {
  try {
    await appApi.put(`/status-task/${id}`, data);
  } catch (error) {}
};

export const uploadFile = async ({ data, success }) => {
  try {
    const res = await appApi.post(`/upload`, data);
    success(res);
  } catch (error) {}
};

export const uploadMultipleFile = async ({ data, success }) => {
  try {
    const res = await appApi.post(`/upload-multiple`, data);
    success(res);
  } catch (error) {}
};

export const deleteFile = async ({ id, success }) => {
  try {
    const res = await appApi.delete(`/document/${id}`);
    success(res);
  } catch (error) {}
};

export const updateTask = async ({ id, data, success }) => {
  try {
    const res = await appApi.put(`/task/${id}`, data);
    success(res);
  } catch (error) {}
};
