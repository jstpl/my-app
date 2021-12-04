import React, {Component} from 'react';
import {Breadcrumb} from "react-bootstrap";
import {connect} from "react-redux";

class Breadcrumbs extends Component {

    componentDidMount() {

    }

    render() {
        console.log(this.props.collection);
        return (
            <Breadcrumb>
                {this.props.collection.map(function (itemEntity) {
                    return (
                        <Breadcrumb.Item href={"#" + itemEntity.route}>
                            {itemEntity.title}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        );
    }
}

const mapStateToProps = (store) => store.breadcrumbItem;
export default connect(mapStateToProps)(Breadcrumbs);
