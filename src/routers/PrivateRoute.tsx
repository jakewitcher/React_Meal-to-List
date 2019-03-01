import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { ApplicationState } from "../store/index";

interface IPrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: new (props: any) => React.Component;
}

export const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state: ApplicationState) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
