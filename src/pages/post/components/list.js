import React, {Component} from 'react';
import UserListView from "../views/list";
import PostApi from "../api/postApi"

class List extends Component {
    render() {
        let PostCollection = PostApi.all();
        return (
            <UserListView posts={PostCollection}/>
        );
    }
}

export default List;
