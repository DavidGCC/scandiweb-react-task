import React, { Component } from "react";

import {
    CartItemContainer,
    CartItemActionsContainer,
    CartItemDetailsContainer,
    CartItemImageContainer,
    CartItemName,
    CartItemPrice
} from "./cart.styles";

import Price from "../shared/Price";

export default class CartItem extends Component {
    render() {
        return (
            <CartItemContainer>
                <CartItemDetailsContainer>
                    <CartItemName>{this.props.cartItem.item.name}</CartItemName>
                    <Price prices={this.props.cartItem.item.prices}>
                        {(symbol, amount) => (
                            <CartItemPrice>{`${symbol}${amount}`}</CartItemPrice>
                        )}
                    </Price>
                </CartItemDetailsContainer>
                <CartItemActionsContainer></CartItemActionsContainer>
                <CartItemImageContainer></CartItemImageContainer>
            </CartItemContainer>
        );
    }
}
