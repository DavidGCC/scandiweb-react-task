import React, { Component } from "react";
import getSumbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "context/Context";

export default class Price extends Component {
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
