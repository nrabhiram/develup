import React, { Component } from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">DevelUp</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        )
    }
}

export default Navbar;
