import React, {Component} from 'react';
import PostApi from "../api/postApi"

class One extends Component {
    render() {
        let id = this.props.match.params.id;
        let PostEntity = PostApi.oneById(id);
        return (
            <div className="About-page">
                <h1>{PostEntity.title}</h1>
                <p>{PostEntity.content}</p>
            </div>
        );
    }
}

export default One;
