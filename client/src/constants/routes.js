export const ADMIN = {
  DASHBOARD: "/admin",
  WORKFLOW: "/admin/workflow",
  PROCESS: "/admin/process",
  CREATE_PROCESS: "/admin/process/create",
  UPDATE_PROCESS: "/admin/process/update/:processId",
  LIST_ROLE: "/admin/list-role",
  LIST_USER: "/admin/users",
};

export const USER = {
  PROFILE: "/user/profile/:userId",
  DETAIL: "/user/detail/:userId",
  MY_PROJECT: "/user/my-project",
  DETAIL_PROJECT: "/user/my-project/:projectId",
  MY_TASK: "/user/my-task",
  DETAIL_TASK: "/user/my-task/:taskId",
};
