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
} from "components/shared/shared.styles";

import Price from "components/shared/Price";
import Attributes from "components/shared/Attributes";

import CartImage from "./CartImage";

import { StoreContext } from "context/Context";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        this.context.increaseCount(this.props.cartItemID);
    }

    handleRemove() {
        this.context.removeFromCart(this.props.cartItemID);
    }

    render() {
        const cartItem = this.context.cart[this.props.cartItemID];
        return (
            <CartItemContainer>
                <CartItemDetailsContainer>
                    <CartItemName>{cartItem.item.name}</CartItemName>
                    <Price prices={cartItem.item.prices}>
                        {(symbol, amount) => (
                            <CartItemPrice>{`${symbol}${amount}`}</CartItemPrice>
                        )}
                    </Price>
                    <Attributes
                        container={AttributesContainer}
                        group={AttributeGroup}
                        button={AttributeButton}
                        item={cartItem.item}
                        itemID={this.props.cartItemID}
                    />
                </CartItemDetailsContainer>
                <CartItemActionsContainer>
                    <CartCountButton
                        onClick={this.handleAdd}>
                        +
                    </CartCountButton>
                    <CartItemCount>{cartItem.count}</CartItemCount>
                    <CartCountButton
                        onClick={this.handleRemove}>
                        -
                    </CartCountButton>
                </CartItemActionsContainer>
                <CartImage images={cartItem.item.gallery} />
            </CartItemContainer>
        );
    }
}

CartItem.contextType = StoreContext;
