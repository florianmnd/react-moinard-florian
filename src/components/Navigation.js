import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navigation = () => {
    let navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>à propos</li>
                </NavLink>
                <NavLink
                    to="/login"
                    className={(nav) => (nav.isActive ? "nav-active" : "")} onClick={() => {
                        setUser(null);
                    }}
                >
                    <li>déconnexion</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;