import React, { Component } from "react";

import { SLink } from "./listings.styles";
import Item from "./Item";

export default class ProductsList extends Component {
    render() {
        return this.props.items.map((item) => (
            <SLink to={`/product/${encodeURI(item.name)}`} key={item.name}>
                <Item item={item} />
            </SLink>
        ));
    }
}
