import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div class="container container__landingpage">
            <div className="landingpage">
                <h1 className="landingpage__title">Meal to List</h1>
                <h3 className="landingpage__subtitle">Meal Planning Made Easy</h3>
                <Link to="meals/create" className="landingpage__button--div">
                    <button className="landingpage__button">Get started!</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;