import React, { PureComponent } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";

import { CartContainer, CartLabel, CartItems } from "./cart.styles";

import { StoreContext } from "context/Context";
import { getTotalPrice } from "utils";

export default class Cart extends PureComponent {
    render() {
        const { cart, currency } = this.context;
        const cartItemIDs = Object.keys(cart);
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
                <TotalPrice price={getTotalPrice(cart, currency)} symbol={getSymbolFromCurrency(currency)}/>
            </CartContainer>
        );
    }
}

Cart.contextType = StoreContext;
