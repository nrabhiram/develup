import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSummary = (props) => {
    const { user } = props;
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-start align-items-center my-1">
                    <div className="profile-img-holder">
                        <img src={user.avatar} />
                    </div>
                    <div className="d-flex flex-column ml-3">
                        <h6>{user.role}</h6>
                        <h6>{user.techStack}</h6>
                    </div>
                </div>
                <h4>{user.firstName} {user.lastName}</h4>
                <hr />
                <h5>About Me</h5>
                <p className="card-text">{user.aboutMe}</p>
                <Link to={'/profile/' + user.id}>
                    <p><em>View Profile</em></p>
                </Link>
            </div>
        </div>
    )
}

export default ProfileSummary;
