import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const { auth } = props;
    if (auth.uid) return <Redirect to='/feed' />
    return (
        <div className="container home position-absolute">
            <h5>Meet like-minded people<br />
            share your ideas<br/>
            Develup together!⚡</h5>
            <p>PS: You can use GIFs for your profile.</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);
