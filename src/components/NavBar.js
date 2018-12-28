import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { onStartLogout } from '../actions/auth';

export class NavBar extends Component {
    state = {
        navLinkClassName: 'navbar__link',
        isToggled: true,
    }

    toggleNav = () => {
        let { isToggled } = this.state;
        this.setState({ isToggled: !isToggled });
        isToggled ? this.setState({ navLinkClassName: 'navbar__link--show' }) : this.setState({ navLinkClassName: 'navbar__link' });
    }

    render() {
        return (
            <div className="navbar">
                <NavLink to="/" className="navbar__brand" activeClassName="navbar__link--active" exact={true}>
                    <p>Meal to List</p>
                </NavLink>
                <i onClick={this.toggleNav} className="fas fa-bars navbar__hamburger" />
                <NavLink to="/meals" className={this.state.navLinkClassName} activeClassName="navbar__link--active" exact={true}>
                    <p>Meals</p>
                </NavLink>
                <NavLink to="/meals/create" className={this.state.navLinkClassName} activeClassName="navbar__link--active" exact={true}>
                    <p>Create a New Meal</p>
                </NavLink>
                <NavLink to="/grocerylists" className={this.state.navLinkClassName} activeClassName="navbar__link--active" exact={true}>
                    <p>Grocery Lists</p>
                </NavLink>
                <NavLink to="/grocerylists/create" className={this.state.navLinkClassName} activeClassName="navbar__link--active" exact={true}>
                    <p>Create a New Grocery List</p>
                </NavLink>
                <button className={`navbar__link-button ${this.state.navLinkClassName}`} onClick={this.props.onStartLogout}>Logout</button>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    onStartLogout: () => dispatch(onStartLogout())
});

export default connect(undefined, mapDispatchToProps)(NavBar);