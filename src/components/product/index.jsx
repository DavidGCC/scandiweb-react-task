import React, { Component } from "react";

import { StoreContext } from "../../context/Context";

import ProductDetails from "./ProductDetails";

export default class Product extends Component {
    render() {
        return (
            <StoreContext.Consumer>
                {
                    ({ items }) => {
                        const item = items.find(item => item.name === this.props.match.params.itemname);
                        if (item) {
                            return <ProductDetails item={item} />
                        } else {
                            <h2 className="error">Unknown Item</h2>
                        }
                    }
                }
            </StoreContext.Consumer>
        )
    }
}
