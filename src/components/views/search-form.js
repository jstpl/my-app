import React, {Component} from 'react';

class SearchForm extends Component {

    getQuery() {
        return this.refs.search.value;
    }

    render() {
        return (
            <form onSubmit={this.props.search} className="search">
                <input type="text" ref="search" placeholder="Search"/>
                <button>Search</button>
            </form>
        );
    }

}

export default SearchForm;
