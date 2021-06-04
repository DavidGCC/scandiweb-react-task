import React, { Component } from "react";

export default class ProductDetails extends Component {
    render() {
        return <div>{this.props.item.name}</div>;
    }
}
