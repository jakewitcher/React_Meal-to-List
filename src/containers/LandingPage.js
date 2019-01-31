import React from "react";
import { connect } from "react-redux";
import { onStartLogin } from "../store/auth/actions";

const LandingPage = props => {
  return (
    <div className="landingpage__container">
      <div className="landingpage">
        <h1 className="landingpage__title">Meal to List</h1>
        <h3 className="landingpage__subtitle">Meal Planning Made Easy</h3>
        <div className="landingpage__button--div">
          <button className="landingpage__button" onClick={props.onStartLogin}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onStartLogin: () => dispatch(onStartLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LandingPage);
