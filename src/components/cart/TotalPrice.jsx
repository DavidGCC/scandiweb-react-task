import React, { PureComponent } from 'react';

import { TotalPriceContainer, TotalPriceNumber, TotalPriceLabel } from "./cart.styles";

export default class TotalPrice extends PureComponent {
    render() {
        console.log(this.props);
        return (
            <TotalPriceContainer>
                <TotalPriceLabel>Total:</TotalPriceLabel>
                <TotalPriceNumber>{this.props.symbol}{this.props.price}</TotalPriceNumber>
            </TotalPriceContainer>
        )
    }
}
