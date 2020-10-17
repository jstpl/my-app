import React, {Component} from 'react';

class Profile extends Component {
    render() {
        let user = this.props.match.params;
        return (
            <div className="user-page">
                <h1>User {user.id}</h1>
            </div>
        );
    }
}

export default Profile;
