import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">DevelUp</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
                { links }
            </div>
        </nav>
        )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
