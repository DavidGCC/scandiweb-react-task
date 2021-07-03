import React, { PureComponent } from "react";

import { StoreContext } from "context/Context";

import ProductDetails from "./ProductDetails";

export default class Product extends PureComponent {
    render() {
        const item = this.context.items.find(
            (item) => item.name === this.props.match.params.itemname
        );
        if (!item) {
            return <h2>Unknown Item</h2>;
        }
        return (
            <div>
                <ProductDetails item={item} />
            </div>
        )
    }
}

Product.contextType = StoreContext;
