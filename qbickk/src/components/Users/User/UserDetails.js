import React from 'react';

const UserDetails = ({userDetails}) => {
    const {username, email, phone} = userDetails;
    return (
        <div>
            <h2>{username}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export {UserDetails};