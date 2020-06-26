import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProfileDetails = (props) => {
    const { auth, user } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (user) {
        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="profile-img-holder">
                                <img src={user.avatar} />
                            </div>
                            <div className="d-flex flex-column ml-3">
                                <h6>{user.role}</h6>
                                <h6>{user.techStack}</h6>
                            </div>
                        </div>
                        <h4>{user.firstName} {user.lastName}</h4>
                        <hr />
                        <h5>About Me</h5>
                        <p className="card-text">{user.aboutMe}</p>
                        <p className="card-text">Visit me <a target="_blank" href="https://abhiramreddy.netlify.app/">here</a></p>
                        <i className="fab fa-linkedin fa-2x mr-2"></i>
                        <i className="fab fa-twitter fa-2x mr-2"></i>
                        <i className="fab fa-github fa-2x mr-2"></i>
                        <i className="fab fa-instagram fa-2x mr-2"></i>
                    </div>
                </div>
                <h3 className="mt-5 mb-3">Posts</h3>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Test Post 1</h5>
                        <hr />
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="img-holder"></div>
                            <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Test Post 1</h5>
                        <hr />
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="img-holder"></div>
                            <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Test Post 1</h5>
                        <hr />
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="img-holder"></div>
                            <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                        </div>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        )  
    } else {
        return (
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.profile_id;
    const users = state.firestore.data.users;
    const user = users ? users[id] : null;
    return {
        auth: state.firebase.auth,
        user: user
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(ProfileDetails);
