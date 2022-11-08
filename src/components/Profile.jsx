import React from 'react';

const Profile = (props) => {
    return (
        <div className='profile'>
            <img className='photo' src={props.image} alt="avatar" />
            {props.isNew && <span className='new shown'>New</span>}
            <h1>{props.name}</h1>
            <p>{props.job}</p>
        </div>
    )
}

export default Profile;