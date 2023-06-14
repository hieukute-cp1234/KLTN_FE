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
