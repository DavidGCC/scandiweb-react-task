import React, { Component } from "react";

import { SLink } from "./listings.styles";
import Item from './Item';

export default class ProductsList extends Component {
    render() {
        return this.props.items.map((item) => (
            <div id="category-page" key={item.name}>
                <h2 id="category-name">
                    {this.props.selectedCategory === "all"
                        ? "All Categories"
                        : this.props.selectedCategory}
                </h2>
                <div className="item-listings">
                    <SLink
                        to={`/product/${encodeURI(item.name)}`}
                        key={item.name}>
                        <Item item={item} />
                    </SLink>
                </div>
            </div>
        ));
    }
}
