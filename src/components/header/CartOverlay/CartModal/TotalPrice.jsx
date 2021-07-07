import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import PropTypes from "prop-types";

import { StoreContext } from "context/Context";
import { TotalPriceContainer, TotalPriceTotal, TotalPriceCost } from "./modal.styles";

export default class TotalPrice extends PureComponent {
    render() {
        return (
            <TotalPriceContainer>
                <TotalPriceTotal>Total:</TotalPriceTotal>
                <TotalPriceCost>{`${getSymbolFromCurrency(this.context.currency)}${this.props.totalPrice}`}</TotalPriceCost>
            </TotalPriceContainer>
        );
    }
}

TotalPrice.contextType = StoreContext;

TotalPrice.propTypes = {
    totalPrice: PropTypes.number
};