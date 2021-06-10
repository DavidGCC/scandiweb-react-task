import React, { Component } from 'react';
import styled from "styled-components";
import getSymbolFromCurrency from 'currency-symbol-map';

import { StoreContext } from "../../../../context/Context";

const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 43px 0 35px 0;
`;

const TotalPriceTotal = styled.span`
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;

const TotalPriceCost = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
`;


export default class TotalPrice extends Component {
    render() {
        return (
            <TotalPriceContainer>
                <TotalPriceTotal>Total:</TotalPriceTotal>
                <TotalPriceCost>{`${getSymbolFromCurrency(this.context.currency)}${this.props.totalPrice}`}</TotalPriceCost>
            </TotalPriceContainer>
        )
    }
}

TotalPrice.contextType = StoreContext;