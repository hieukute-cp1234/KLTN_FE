import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard ";
import MarKet from "../pages/Market";

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
  {
    key: "HOME",
    path: "/",
    component: <Dashboard />,
    children: [],
  },
];

export { routersPublic, routersPrivate };
