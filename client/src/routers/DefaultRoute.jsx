import React from "react";
import { Route } from "react-router-dom";

const DefaultRoute = ({ route }) => {
  return route.children.length ? (
    <Route path={route.path} element={route.component}>
      {route.children.map((routeChild) => (
        <Route
          key={routeChild.key}
          path={routeChild.path}
          element={routeChild.component}
        />
      ))}
    </Route>
  ) : (
    <Route path={route.path} element={route.component} />
  );
};

export default DefaultRoute;
