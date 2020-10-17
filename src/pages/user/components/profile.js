import React, {Component} from 'react';

class Profile extends Component {
    render() {
        let userId = this.props.match.params.id;
        return (
            <div className="user-page">
                <h1>User {userId}</h1>
            </div>
        );
    }
}

export default Profile;
