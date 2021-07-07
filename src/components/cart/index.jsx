import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";

import { CartContainer, CartLabel, CartItems } from "./cart.styles";

import { StoreContext } from "context/Context";
import { getTotalPrice } from "utils";

export default class Cart extends PureComponent {
    render() {
        const cartItemIDs = Object.keys(this.context.cart);
        return (
            <CartContainer>
                <CartLabel>Cart</CartLabel>
                <CartItems>
                    {
                        cartItemIDs.map(cartItemID => {
                            return <CartItem key={cartItemID} cartItemID={cartItemID} />;
                        })
                    }
                </CartItems>
                <TotalPrice price={getTotalPrice(this.context.cart, this.context.currency)} symbol={getSymbolFromCurrency(this.context.currency)}/>
            </CartContainer>
        );
    }
}

Cart.contextType = StoreContext;
