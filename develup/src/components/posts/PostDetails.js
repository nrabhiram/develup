import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import { addComment } from '../../store/actions/postAction';
import CommentsList from './CommentsList';
import Likes from './Likes';
import moment from 'moment';

class PostDetails extends Component {
    state = {
        comment: '',
        postId: this.props.match.params.post_id
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state);
        e.target.reset();
    }
    render() {
        console.log(this.props);
        const { post, auth, comments } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        if (post) {
            return (
                <div className="container">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <hr />
                            <div className="d-flex justify-content-start align-items-center my-1">
                                <div className="img-holder">
                                    <img src={post.authorAvatar} />
                                </div>
                                <h6 className="card-subtitle ml-2 text-muted">{post.authorFirstName} {post.authorLastName}</h6>
                            </div>
                            <p className="card-text">{post.content}</p>
                            <Likes postId={this.state.postId} />
                            <p><small>{moment(post.createdAt.toDate().toString()).fromNow()}</small></p>
                            <hr />
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <textarea className="form-control" id="comment" rows="2" onChange={this.handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Comment</button>
                            </form>
                            <CommentsList comments={comments} />
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
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    const comments = state.firestore.ordered.comments;
    const postComments = comments ? comments.filter(comment => {
        return comment.postId === id
    }) : null;
    return {
        post: post,
        auth: state.firebase.auth,
        comments: postComments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (comment) => dispatch(addComment(comment))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'posts' },
        { collection: 'comments' }
    ])
)(PostDetails);


