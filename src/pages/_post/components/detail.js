import React, {Component} from 'react';
import PostApi from "../api/postApi"
import PostDetailView from "../views/detail"

class Detail extends Component {
    render() {
        let id = this.props.match.params.id;
        let post = PostApi.oneById(id);
        return (
            <PostDetailView post={post}/>
        );
    }
}

export default Detail;
