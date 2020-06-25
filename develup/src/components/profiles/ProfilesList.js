import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProfilesList extends Component {
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="profile-img-holder"></div>
                            <div className="d-flex flex-column ml-3">
                                <h6>Fullstack Developer</h6>
                                <h6>MERN Stack</h6>
                            </div>
                        </div>
                        <h4>Abhiram Reddy</h4>
                        <hr />
                        <h5>About Me</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="profile-img-holder"></div>
                            <div className="d-flex flex-column ml-3">
                                <h6>Fullstack Developer</h6>
                                <h6>MERN Stack</h6>
                            </div>
                        </div>
                        <h4>Abhiram Reddy</h4>
                        <hr />
                        <h5>About Me</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-start align-items-center my-1">
                            <div className="profile-img-holder"></div>
                            <div className="d-flex flex-column ml-3">
                                <h6>Fullstack Developer</h6>
                                <h6>MERN Stack</h6>
                            </div>
                        </div>
                        <h4>Abhiram Reddy</h4>
                        <hr />
                        <h5>About Me</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProfilesList);
