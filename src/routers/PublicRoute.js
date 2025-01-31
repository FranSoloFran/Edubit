import React from "react";
import { Redirect, Route } from "react-router-dom";
import ProtoTypes from "prop-types";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/landingpage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.prototype = {
  isAuthenticated: ProtoTypes.bool.isRequired,
  component: ProtoTypes.func.isRequired,
};
