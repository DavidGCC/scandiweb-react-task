import React, { PureComponent } from 'react';

import CartItem from "./CartItem";

import { CartContainer, CartLabel, CartItems } from "./cart.styles";

import { StoreContext } from "context/Context";

export default class Cart extends PureComponent {
    render() {
        const cartItemIDs = Object.keys(this.context.cart);
        return (
            <CartContainer>
                <CartLabel>Cart</CartLabel>
                <CartItems>
                    {
                        cartItemIDs.map(cartItemID => {
                            return <CartItem key={cartItemID} cartItemID={cartItemID} />
                        })
                    }
                </CartItems>
            </CartContainer>
        )
    }
}

Cart.contextType = StoreContext;
