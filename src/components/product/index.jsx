import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { StoreContext } from "context/Context";

import ProductDetails from "./ProductDetails";

export default class Product extends PureComponent {
    render() {
        const { itemname } = this.props.match.params;
        const { items } = this.context;
        
        const item = items.find(
            (item) => item.name === itemname
        );
        if (!item) {
            return <h2>Unknown Item</h2>;
        }
        return (
            <div>
                <ProductDetails item={item} />
            </div>
        );
    }
}

Product.contextType = StoreContext;

Product.propTypes = {
    match: PropTypes.object
};