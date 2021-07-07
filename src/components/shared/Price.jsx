import React, { PureComponent } from "react";
import getSumbolFromCurrency from "currency-symbol-map";
import PropTypes from "prop-types";


import { StoreContext } from "context/Context";

export default class Price extends PureComponent {
    render() {
        const price = this.props.prices.find(i => i.currency === this.context.currency);
        return (
            <div>
                {
                    this.props.children(getSumbolFromCurrency(price.currency), price.amount)
                }
            </div>
        );
    }
}

Price.contextType = StoreContext;

Price.propTypes = {
    prices: PropTypes.array.isRequired,
    children: PropTypes.node
};