import React from 'react';
import './Empty.css';

const Empty = ({user}) => {
    const  {name, profile_pic, status} = user;
    const first_name = name.split('')[0];

    return (
        <div className='Empty'>
            <h1 className='Empty_name'> Welcome, {first_name}</h1>
            <img src={profile_pic} alt={name} className='Empty_img' />
            <p className='Empty_status'>
                <b>Status:</b> {status}
            </p>
            <button className='Empty_btn'>Start A Conversation</button>
            <p className='Empty_info'>
            say hi or something.
            </p>
        </div>
    );
};

export default Empty