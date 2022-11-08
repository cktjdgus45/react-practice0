import React from 'react';
import Avatar from './Avatar';

const Profile = ({ image,
    isNew,
    name,
    job }) => {
    return (
        <div className='profile'>
            <Avatar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{job}</p>
        </div>
    )
}

export default Profile;