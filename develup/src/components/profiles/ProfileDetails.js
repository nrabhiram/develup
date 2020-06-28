import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PostSummary from '../posts/PostSummary';

const ProfileDetails = (props) => {
    console.log(props);
    const { auth, user, userPosts } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    const postsList = userPosts ? userPosts.map(post => {
        return <PostSummary key={post.id} post={post} />
    }) : null;
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
                <h3 className="mt-5 mb-3 titles">Posts</h3>
                    { postsList }
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
    const posts = state.firestore.ordered.posts;
    const userPosts = posts ? posts.filter((post) => {
        return post.authorId === id
    }) : null;
    return {
        auth: state.firebase.auth,
        user: user,
        userPosts: userPosts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' },
        { collection: 'posts' }
    ])
)(ProfileDetails);
