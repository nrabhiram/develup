import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const Notifications = (props) => {
    const { auth, notifications } = props;
    if (!auth.uid) return <Redirect to='/' />
    const notificationsList = notifications ? notifications.map(notification => {
        return  <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="img-holder mr-1">
                                <img src={notification.userAvatar} />
                            </div>
                            <p className="card-text">{notification.user} {notification.content}</p>
                        </div>
                        <p><small>{moment(notification.time.toDate().toString()).fromNow()}</small></p>
                    </div>
                </div>
    }) : null;
    return (
        <div className="container">
            {notificationsList}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications' }
    ])
)(Notifications)
