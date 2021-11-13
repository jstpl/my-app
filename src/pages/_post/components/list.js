import React, {Component} from 'react';
import PostListView from "../views/list";
import PostApi from "../api/postApi"

class List extends Component {
    render() {
        let PostCollection = PostApi.all();
        return (
            <PostListView posts={PostCollection}/>
        );
    }
}

export default List;
