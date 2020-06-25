import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const PostDetails = (props) => {
    const { post } = props;
    if (post) {
        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="img-holder"></div>
                            <h6 className="card-subtitle ml-2 text-muted">{post.authorFirstName} {post.authorLastName}</h6>
                        </div>
                        <p className="card-text">{post.content}</p>
                        <span>27 <i className="far fa-thumbs-up"></i></span>
                        <p><small>An hour ago</small></p>
                        <hr />
                        <div className="wrapper my-5 w-95">
                            <div className="d-flex justify-content-start align-items-center my-1">
                                <div className="img-holder"></div>
                                <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                            </div>
                            <p>Cool work dude!</p>
                            <p><small>An hour ago</small></p>
                        </div>
                        <div className="wrapper my-5 w-95">
                            <div className="d-flex justify-content-start align-items-center my-1">
                                <div className="img-holder"></div>
                                <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                            </div>
                            <p>Cool work dude! Cool work dude! Cool work dude! Cool work dude!</p>
                            <p><small>An hour ago</small></p>
                        </div>
                        <div className="wrapper my-5 w-95">
                            <div className="d-flex justify-content-start align-items-center my-1">
                                <div className="img-holder"></div>
                                <h6 className="card-subtitle ml-2 text-muted">Abhiram Reddy</h6>
                            </div>
                            <p>Cool work dude!</p>
                            <p><small>An hour ago</small></p>
                        </div>
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
    const id = ownProps.match.params.post_id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post: post
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails);


