import React from 'react';
import { Link } from 'react-router-dom';
import Likes from './Likes';
import moment from 'moment';

const PostSummary = ({ post }) => {
    return (
        <div>
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
                    <Link to={'/post/' + post.id}>
                        <p><em>See more</em></p>
                    </Link>
                    <Likes postId={post.id} />
                    <p><small>{moment(post.createdAt.toDate().toString()).fromNow()}</small></p>
                </div>
            </div>
        </div>
    )
}

export default PostSummary;
