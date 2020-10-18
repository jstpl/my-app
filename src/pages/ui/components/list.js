import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as userApi from "../api/userApi";
// import UserListView from "../views/list";
import {Link} from "react-router-dom";

const ui = [
    {
        name: 'toastr',
    },
    {
        name: 'alert',
    },
    {
        name: 'Badge',
    },
    {
        name: 'Blockquote',
    },
    {
        name: 'Breadcrumb',
    },
    {
        name: 'Button',
    },
    {
        name: 'ButtonGroup',
    },
    {
        name: 'Card',
    },
    {
        name: 'Carousel',
    },
    {
        name: 'Collapse',
    },
    {
        name: 'Display',
    },
    {
        name: 'Dropdown',
    },
    {
        name: 'Figure',
    },
    {
        name: 'Form',
    },
    {
        name: 'InputGroup',
    },
    {
        name: 'Jumbotron',
    },
    {
        name: 'Lead',
    },
    {
        name: 'List',
    },
    {
        name: 'ListGroup',
    },
    {
        name: 'Modal',
    },
    {
        name: 'Nav',
    },
    {
        name: 'Navbar',
    },
    {
        name: 'Pagination',
    },
    {
        name: 'Progress',
    },
    {
        name: 'Popover',
    },
    {
        name: 'Tooltip',
    },
];

class List extends Component {

    componentDidMount() {
        // userApi.getUsers();
    }

    render() {
        return (
            <div className="data-list">
                <ul>
                    {ui.map(function (user) {
                        return (
                            <li key={user.name}>
                                <Link to={'/ui/' + user.name}>{user.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            // <UserListView uiList={this.props.ui}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);
