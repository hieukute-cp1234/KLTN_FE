import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import MarKet from "../pages/Market";
import AdminListProcess from "../pages/Admin/ListProcess";
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminCreateProcess from "../pages/Admin/CreateProcess";
import AdminListRole from "../pages/Admin/ListRole";
import AdminUsers from "../pages/Admin/ListUser";
import UserProfile from "../pages/User/Profile";
import { ADMIN, USER } from "../constants/routes";

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
    key: "ADMIN_PROCESS_CREATE",
    path: ADMIN.CREATE_PROCESS,
    component: <AdminCreateProcess />,
  },
  {
    key: "ADMIN_PROCESS_UPDATE",
    path: ADMIN.UPDATE_PROCESS,
    component: <AdminCreateProcess />,
  },
  {
    key: "ADMIN_LIST_ROLE",
    path: ADMIN.LIST_ROLE,
    component: <AdminListRole />,
  },
  {
    key: "ADMIN_LIST_USER",
    path: ADMIN.LIST_USER,
    component: <AdminUsers />,
  },
  {
    key: "USER_PROFILE",
    path: USER.PROFILE,
    component: <UserProfile />,
  },
];

export { routersPublic, routersPrivate };
