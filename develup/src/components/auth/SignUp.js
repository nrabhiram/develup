import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <h2>User Info</h2>
                <form>
                    <h5>User Name</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" />
                        </div>
                    </div>
                    <h5>Skills</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-7">
                            <label htmlFor="role">Role</label>
                            <input type="text" className="form-control" id="role" />
                            <small className="form-text text-muted">What do you do? Ex. Front-End Developer, Game Developer, Designer etc.</small>
                        </div>
                        <div className="form-group col-sm-5">
                            <label htmlFor="techStack">Tech Stack</label>
                            <input type="text" className="form-control" id="techStack" />
                        </div>
                    </div>
                    <h5>Social Handles</h5>
                    <div className="form-group">
                        <label htmlFor="portfolio">Portfolio</label>
                            <input type="text" className="form-control" id="portfolio" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input type="text" className="form-control" id="linkedin" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="twitter">Twitter</label>
                            <input type="text" className="form-control" id="twitter" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="github">GitHub</label>
                            <input type="text" className="form-control" id="github" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="instagram">Instagram</label>
                            <input type="text" className="form-control" id="instagram" />
                        </div>
                    </div>
                    <h5>Authentication</h5>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="email">Email Adress</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <h5>About You</h5>
                    <div className="form-group">
                        <textarea className="form-control" id="aboutUser" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;

