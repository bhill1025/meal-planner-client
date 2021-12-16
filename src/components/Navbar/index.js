import {Link} from "react-router-dom";
import React from "react";

const Navbar = (
    {
        active = 'home'
    }
) => {

    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className={'nav-size'}>
            <div className={'pos-fixed navigation'}>
                <nav className="navbar navbar-expand navbar-background remove-padding">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto nav-size">
                            <li className={'logo-box'}>
                                <button onClick={() => goToTop()}
                                        className={'top-button'} id="myBtn" title="Go to top">
                                    <i className="far fa-smile logo-style"></i>
                                </button>
                            </li>
                            <Link to={`/home`} className={'link-no-format'}>
                                <li className={`nav-item center-text-vert ${active === 'home' ? 'active' : ''}`}>
                                    Home
                                </li>
                            </Link>
                            <Link to={`/home`} className={'link-no-format'}>
                                <li className={`nav-item center-text-vert ${active === 'recipes' ? 'active' : ''}`}>
                                    Recipes
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;