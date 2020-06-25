import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/postAction';

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Post Title</label>
                        <input type="text" className="form-control" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Post Content</label>
                        <textarea className="form-control" id="content" rows="10" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Create post</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);