import React, { Component } from "react";

import { StoreContext } from "context/Context";
import Attributes from "components/shared/Attributes";

import { ItemContainer, NameAndPrice, Actions, ImageContainer, ItemName, ItemNumbers, ItemPrice, ItemImage, CountControl } from "./modal.styles";
import { AttributesContainer, AttributeGroup, AttrButton } from "./modal.styles";


import Price from "components/shared/Price";
export default class ModalItem extends Component {
    constructor(props) {
        super(props);
        this.state = { cartItem: {} }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        this.context.increaseCount(this.props.itemID);
    }

    handleRemove() {
        this.context.removeFromCart(this.props.itemID);
    }
    render() {
        const cartItem = this.context.cart[this.props.itemID];
        const { itemID } = this.props;
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemName>{cartItem.item.name}</ItemName>
                    <Price prices={cartItem.item.prices}>
                        {
                            (symbol, amount) => (
                                <ItemPrice>{symbol}{amount}</ItemPrice>
                            )
                        }
                    </Price>
                </NameAndPrice>
                <Actions>
                    <CountControl onClick={this.handleAdd}>
                        +
                    </CountControl>
                    <ItemNumbers>{cartItem.count}</ItemNumbers>
                    <CountControl
                        onClick={this.handleRemove}>
                        -
                    </CountControl>
                </Actions>
                <ImageContainer>
                    <ItemImage src={cartItem.item.gallery[0]} />
                </ImageContainer>
                <Attributes itemID={itemID} container={AttributesContainer} group={AttributeGroup} button={AttrButton} />
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;
