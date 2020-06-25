import React, { Component } from 'react'
import PostsList from '../posts/PostsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="container">
                <div className="notification text-right">
                    <i className="far fa-bell fa-2x"></i>
                </div>
                <PostsList posts={posts} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(Dashboard);
