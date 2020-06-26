import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ProfileSummary from './ProfileSummary';

class ProfilesList extends Component {
    render() {
        const { auth, users } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        const usersList = users ? users.map(user => {
            return <ProfileSummary key={user.id} user={user} />
        }) : null;
        return (
            <div className="container">
                { usersList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(ProfilesList);
