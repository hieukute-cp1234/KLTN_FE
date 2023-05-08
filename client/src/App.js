import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routersPublic, routersPrivate } from "./routers/routes";
import PrivateRoute from "./routers/PrivateRoute";
import "./assets/scss/global.scss";
import "reactflow/dist/style.css";

window.addEventListener("error", (e) => {
  if (e.message === "ResizeObserver loop limit exceeded") {
    const resizeObserverErrDiv = document.getElementById(
      "webpack-dev-server-client-overlay-div"
    );
    const resizeObserverErr = document.getElementById(
      "webpack-dev-server-client-overlay"
    );
    if (resizeObserverErr) {
      resizeObserverErr.setAttribute("style", "display: none");
    }
    if (resizeObserverErrDiv) {
      resizeObserverErrDiv.setAttribute("style", "display: none");
    }
  }
});

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
