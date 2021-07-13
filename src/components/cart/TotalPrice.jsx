import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { TotalPriceContainer, TotalPriceNumber, TotalPriceLabel } from "./cart.styles";

export default class TotalPrice extends PureComponent {
    render() {
        const { symbol, price } = this.props;
        return (
            <TotalPriceContainer>
                <TotalPriceLabel>Total:</TotalPriceLabel>
                <TotalPriceNumber>{symbol}{price}</TotalPriceNumber>
            </TotalPriceContainer>
        );
    }
}

TotalPrice.propTypes = {
    symbol: PropTypes.string,
    price: PropTypes.number
};
