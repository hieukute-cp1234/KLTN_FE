import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard ";
import MarKet from "../pages/Market";
import AdminListProcess from "../pages/Admin/ListProcess";
import AdminDashboard from "../pages/Admin/Dashboard";

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
    path: "/admin",
    component: <AdminDashboard />,
    children: [],
  },
  {
    key: "ADMIN_PROCESS",
    path: "/admin/process",
    component: <AdminListProcess />,
  },
];

export { routersPublic, routersPrivate };
