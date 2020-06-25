import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedInLinks() {
    return (
        <ul className="navbar-nav">
            <li className="nav-item ml-2">
                <NavLink to="/signin">Sign In</NavLink>
            </li>
            <li className="nav-item ml-2">
                <NavLink to="/signup">Sign Up</NavLink>
            </li> 
        </ul>
    )
}

export default SignedInLinks;
