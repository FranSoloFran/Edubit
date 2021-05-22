import React from 'react';
import { Link } from 'react-router-dom';



export const NavBarHome = () => {

    return (
        <aside className="home__sidebar">
            <div className="home__sidebar-navbar">
                <div className="home__sidebar-logo mt-1"></div>
                <Link to="/homepage/login" className="home__sidebar-link">Login</Link>
            </div>

        </aside>

    )
}