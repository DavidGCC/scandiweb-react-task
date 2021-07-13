import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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
        const { cartItemID } = this.props;
        const { cart } = this.context;
        const { item, count } = cart[cartItemID];
        return (
            <CartItemContainer>
                <CartItemDetailsContainer>
                    <ItemNameLink to={`/product/${item.name}`}>
                        <CartItemName id="cart-item-name">{item.name}</CartItemName>
                    </ItemNameLink>
                    <Price prices={item.prices} count={count}>
                        {(symbol, amount) => (
                            <CartItemPrice>{`${symbol}${amount * count}`}</CartItemPrice>
                        )}
                    </Price>
                    <Attributes
                        container={AttributesContainer}
                        group={AttributeGroup}
                        button={AttributeButton}
                        item={item}
                        itemID={cartItemID}
                        groupName={AttributeGroupName}
                    />
                </CartItemDetailsContainer>
                <CartItemActionsContainer>
                    <CartCountButton
                        onClick={this.handleAdd}>
                        +
                    </CartCountButton>
                    <CartItemCount>{count}</CartItemCount>
                    <CartCountButton
                        onClick={this.handleRemove}>
                        -
                    </CartCountButton>
                </CartItemActionsContainer>
                <CartImage images={item.gallery} />
            </CartItemContainer>
        );
    }
}

CartItem.contextType = StoreContext;

CartItem.propTypes = {
    cartItemID: PropTypes.string.isRequired
};