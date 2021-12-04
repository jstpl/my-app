import React, {Component} from 'react';
import {Breadcrumb} from "react-bootstrap";
import {connect} from "react-redux";

class Breadcrumbs extends Component {

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        // console.log(555);
    }

    render() {
        if(this.props.collection.length) {
            return (
                <Breadcrumb>
                    {this.props.collection.map(function (itemEntity, key) {
                        return (
                            <Breadcrumb.Item key={key} href={"#" + itemEntity.route}>
                                {itemEntity.title}
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            );
        } else {
            return '';
        }
    }
}

const mapStateToProps = (store) => store.breadcrumbItem;
export default connect(mapStateToProps)(Breadcrumbs);
