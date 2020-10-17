import React from 'react';

const Profile = ({match}) => {

    return (
        <div className="user-page">
            <h1>User {match.params.id}</h1>
        </div>
    )
};

export default Profile;
