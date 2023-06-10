import { appApi } from "../../configs/axios";

export const createProject = async ({ data, actions }) => {
  try {
    await appApi.post("/project", data);
    actions.success();
  } catch (error) {}
};
