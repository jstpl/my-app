import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';

class UserProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.params.userId
    userApi.getProfile(userId)
  }

  render() {
    return (
      <UserProfile {...this.props.profile} />
    );
  }

};

const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
