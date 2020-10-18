import React, {Component} from 'react';
import * as userApi from '../../pages/user/api/user-api';
import * as widgetApi from '../../api/widget-api';
import SearchForm from '../views/search-form';

class SearchFormContainer extends Component {

    search(event) {
        event.preventDefault();

        // By assigning a "child" ref to <SearchForm />, we
        // can use that reference to gain access to the
        // .getQuery() method. See the code for
        // <SearchForm /> to see how it returns a value.
        let query = this.refs.child.getQuery();

        if (this.props.searchType === 'users') {
            userApi.searchUsers(query);
        } else if (this.props.searchType === 'widgets') {
            widgetApi.searchWidgets(query);
        }
    }

    render() {
        return (
            <SearchForm search={this.search} ref="child"/>
        );
    }

}

export default SearchFormContainer;
