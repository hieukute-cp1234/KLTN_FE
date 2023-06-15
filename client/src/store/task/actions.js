import { appApi } from "../../configs/axios";

export const fetchTaskByProject = async ({ params, actions }) => {
  try {
    const res = await appApi.get("/task", { params });
    actions.success(res);
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
