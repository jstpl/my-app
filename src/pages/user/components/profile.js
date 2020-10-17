import React, {Component} from 'react';
import UserProfileView from '../views/profile'

class Profile extends Component {
    render() {
        let user = this.props.match.params;
        return (
            <UserProfileView user={user}/>
        );
    }
}

export default Profile;
