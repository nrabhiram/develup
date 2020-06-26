import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { storage } from '../../config/fbConfig';
import { signUp } from '../../store/actions/authAction';

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        avatar: '',
        role: '',
        techStack: '',
        portfolio: '',
        linkedin: '',
        twitter: '',
        github: '',
        instagram: '',
        email: '',
        password: '',
        aboutMe: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    handleImageChange = (e) => {
        const image = e.target.files[0]
        console.log(image)

        const uploadTask = storage.ref(`image/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
                storage
                .ref('image')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    this.setState({
                        avatar: url
                    })
                    console.log('success')
                })
            }
        )
    }
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <h2>User Info</h2>
                <form onSubmit={this.handleSubmit}>
                    <h5>User Profile</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" accept="image/*" onChange={this.handleImageChange} />
                    </div>
                    <h5>Skills</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-7">
                            <label htmlFor="role">Role</label>
                            <input type="text" className="form-control" id="role" onChange={this.handleChange} />
                            <small className="form-text text-muted">What do you do? Ex. Front-End Developer, Game Developer, Designer etc.</small>
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="techStack">Tech Stack</label>
                            <input type="text" className="form-control" id="techStack" onChange={this.handleChange} />
                        </div>
                    </div>
                    <h5>Social Handles</h5>
                    <div className="form-group">
                        <label htmlFor="portfolio">Portfolio</label>
                            <input type="text" className="form-control" id="portfolio" onChange={this.handleChange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input type="text" className="form-control" id="linkedin" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="twitter">Twitter</label>
                            <input type="text" className="form-control" id="twitter" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="github">GitHub</label>
                            <input type="text" className="form-control" id="github" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="instagram">Instagram</label>
                            <input type="text" className="form-control" id="instagram" onChange={this.handleChange} />
                        </div>
                    </div>
                    <h5>Authentication</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="email">Email Adress</label>
                            <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <h5>About You</h5>
                    <div className="form-group">
                        <textarea className="form-control" id="aboutMe" rows="5" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

