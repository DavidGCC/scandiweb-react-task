import React, { PureComponent } from "react";

import {
    CartItemContainer,
    CartItemActionsContainer,
    CartItemDetailsContainer,
    CartItemName,
    CartItemPrice,
    CartCountButton,
    CartItemCount,
    ItemNameLink
} from "./cart.styles";

import {
    AttributeButton,
    AttributeGroup,
    AttributesContainer,
    AttributeGroupName
} from "components/shared/shared.styles";

import Price from "components/shared/Price";
import Attributes from "components/shared/Attributes";

import CartImage from "./CartImage";

import { StoreContext } from "context/Context";

export default class CartItem extends PureComponent {
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
                    <ItemNameLink to={`/product/${cartItem.item.name}`}>
                        <CartItemName>{cartItem.item.name}</CartItemName>
                    </ItemNameLink>
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
                        groupName={AttributeGroupName}
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
