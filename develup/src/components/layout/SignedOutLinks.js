import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLinks() {
    return (
        <ul className="navbar-nav">
            <li className="nav-item ml-2">
                <NavLink to="/create">Create Post</NavLink>
            </li>
            <li className="nav-item ml-2">
                <NavLink to="/profiles">Profiles</NavLink>
            </li>
            <li className="nav-item ml-2">
                <NavLink to="/">Log Out</NavLink>
            </li>
        </ul> 
    )
}

export default SignedOutLinks;
