import React, { Component } from "react";

import {
    CartItemContainer,
    CartItemActionsContainer,
    CartItemDetailsContainer,
    CartItemName,
    CartItemPrice,
    CartCountButton,
    CartItemCount,
} from "./cart.styles";

import {
    AttributeButton,
    AttributeGroup,
    AttributesContainer,
} from "../shared/shared.styles";

import Price from "../shared/Price";
import Attributes from "../shared/Attributes";

import CartImage from "./CartImage";

import { StoreContext } from "../../context/Context";

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
                    <Attributes
                        container={AttributesContainer}
                        group={AttributeGroup}
                        button={AttributeButton}
                        item={this.props.cartItem.item}
                    />
                </CartItemDetailsContainer>
                <CartItemActionsContainer>
                    <CartCountButton
                        onClick={() =>
                            this.context.addToCart(this.props.cartItem.item)
                        }>
                        +
                    </CartCountButton>
                    <CartItemCount>{this.props.cartItem.count}</CartItemCount>
                    <CartCountButton
                        onClick={() =>
                            this.context.removeFromCart(
                                this.props.cartItem.item
                            )
                        }>
                        -
                    </CartCountButton>
                </CartItemActionsContainer>
                <CartImage images={this.props.cartItem.item.gallery} />
            </CartItemContainer>
        );
    }
}

CartItem.contextType = StoreContext;
