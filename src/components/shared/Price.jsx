import React, { PureComponent } from "react";
import getSumbolFromCurrency from "currency-symbol-map";
import PropTypes from "prop-types";


import { StoreContext } from "context/Context";

export default class Price extends PureComponent {
    render() {
        const { count, prices } = this.props;
        const { currency, amount } = prices.find(i => i.currency === this.context.currency);
        const roundedPrice = Math.round(amount * (count || 1) * 100) / 100;
        return (
            <div>
                {
                    this.props.children(getSumbolFromCurrency(currency), roundedPrice)
                }
            </div>
        );
    }
}

Price.contextType = StoreContext;

Price.propTypes = {
    prices: PropTypes.array.isRequired,
    children: PropTypes.func,
    count: PropTypes.number
};