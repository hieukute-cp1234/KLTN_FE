import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routersPublic, routersPrivate } from "./routers/routes";
import PrivateRoute from "./routers/PrivateRoute";
import "./assets/scss/global.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          {routersPrivate.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
        {routersPublic.map((route) => (
          <Route key={route.key} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
