import React from "react";
import { Route } from "react-router-dom";

const DefaultRoute = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component}>
          {route.children.length && <DefaultRoute routes={route.children} />}
        </Route>
      ))}
    </>
  );
};

export default DefaultRoute;
