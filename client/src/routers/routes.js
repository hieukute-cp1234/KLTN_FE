import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard ";
import MarKet from "../pages/Market";
import AdminListProcess from "../pages/Admin/ListProcess";
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminWorkflow from "../pages/Admin/Workflow";
import AdminCreateWorkflow from "../pages/Admin/CreateWorkflow";
import AdminListRole from "../pages/Admin/ListRole";
import AdminUsers from "../pages/Admin/ListUser";
import { ADMIN } from "../constants/routes";

const routersPublic = [
  {
    key: "LOGIN",
    path: "/login",
    component: <Login />,
    children: [],
  },
  {
    key: "MARKET",
    path: "/market",
    component: <MarKet />,
    children: [],
  },
];

const routersPrivate = [
  //user route
  {
    key: "USER",
    path: "/",
    component: <Dashboard />,
  },

  //admin route
  {
    key: "ADMIN",
    path: ADMIN.DASHBOARD,
    component: <AdminDashboard />,
    children: [],
  },
  {
    key: "ADMIN_PROCESS",
    path: ADMIN.PROCESS,
    component: <AdminListProcess />,
  },
  {
    key: "ADMIN_WORKFLOW",
    path: ADMIN.WORKFLOW,
    component: <AdminWorkflow />,
  },
  {
    key: "ADMIN_WORKFLOW_CREATE",
    path: ADMIN.CREATE_WORKFLOW,
    component: <AdminCreateWorkflow />,
  },
  {
    key: "ADMIN_WORKFLOW_UPDATE",
    path: ADMIN.UPDATE_WORKFLOW,
    component: <AdminCreateWorkflow />,
  },
  {
    key: "ADMIN_LIST_ROLE",
    path: ADMIN.LIST_ROLE,
    component: <AdminListRole />,
  },
  {
    key: "ADMIN_LIST_UUSER",
    path: ADMIN.LIST_USER,
    component: <AdminUsers />,
  },
];

export { routersPublic, routersPrivate };
