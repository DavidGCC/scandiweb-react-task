import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { SLink } from "./listings.styles";
import Item from "./Item";

export default class ProductsList extends PureComponent {
    render() {
        return this.props.items.map((item) => (
            <SLink to={`/product/${encodeURI(item.name)}`} key={item.name}>
                <Item item={item} />
            </SLink>
        ));
    }
}

ProductsList.propTypes = {
    items: PropTypes.array
};