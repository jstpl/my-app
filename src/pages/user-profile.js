import React, {Component} from 'react';

const UserProfile = ({match}) => {

  return (
      <div className="user-page">
        <h1>User {match.params.id}</h1>
      </div>
  )
};

export default UserProfile;
