import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Likes extends Component {
    state = {
        postId: this.state.postId,
    }
    handleClick = () => {

    }
    render() {
        console.log(this.props);
        return (
            <div className="wrapper">
                <span></span>
                <i className="far fa-thumbs-up ml-1"></i>
            </div>
        )
    }
}

export default Likes;





