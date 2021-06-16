import React, { Component } from 'react';

import CartItem from "./CartItem";

import { CartContainer, CartLabel, CartItems } from "./cart.styles";

import { StoreContext } from "../../context/Context";

export default class Cart extends Component {
    render() {
        const cartEntries = Object.values(this.context.cart);
        return (
            <CartContainer>
                <CartLabel>Cart</CartLabel>
                <CartItems>
                    {
                        cartEntries.map(cartItem => {
                            return <CartItem key={cartItem.item.name} cartItem={cartItem} />
                        })
                    }
                </CartItems>
            </CartContainer>
        )
    }
}

Cart.contextType = StoreContext;
