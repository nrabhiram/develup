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
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <h2 className="titles">Create Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="content" rows="10" placeholder="Content" onChange={this.handleChange}></textarea>
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