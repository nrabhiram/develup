import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedOutLinks = () => {
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

export default SignedOutLinks;
