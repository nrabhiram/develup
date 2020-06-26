import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedInLinks= (props) => {
    const { profile } = props;
    return (
        <ul className="navbar-nav">
            <li className="nav-item-ml-2">
            <NavLink to="/">
                <div className="d-flex justify-content-start my-1">
                    <div className="img-holder">
                        <img src={profile.avatar} />
                    </div>
                    <p className="ml-2 text-muted">{profile.firstName} {profile.lastName}</p>
                </div>
            </NavLink>
            </li>
            <li className="nav-item ml-2">
                <NavLink to="/create">Create Post</NavLink>
            </li>
            <li className="nav-item ml-2">
                <NavLink to="/profiles">Profiles</NavLink>
            </li>
            <li className="nav-item ml-2">
                <a onClick={ props.signOut }>Log Out</a>
            </li>
        </ul> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
