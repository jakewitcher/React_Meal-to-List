import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { ApplicationState } from "../store/index";

interface IPublicRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: new (props: any) => React.Component;
}

export const PublicRoute: React.FC<IPublicRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/meals" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state: ApplicationState) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
