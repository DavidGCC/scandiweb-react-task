import React, { Component } from 'react';

import { CartItemContainer } from "./cart.styles";

export default class CartItem extends Component {
    render() {
        return (
            <CartItemContainer>
                {
                    this.props.cartItem.item.name
                }
            </CartItemContainer>
        )
    }
}
