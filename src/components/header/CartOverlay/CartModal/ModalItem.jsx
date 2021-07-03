import React, { PureComponent } from "react";

import { StoreContext } from "context/Context";
import Attributes from "components/shared/Attributes";

import {
    ItemContainer,
    NameAndPrice,
    Actions,
    ImageContainer,
    ItemName,
    ItemNumbers,
    ItemPrice,
    ItemImage,
    CountControl,
    AttributesContainer,
    AttributeGroup, AttrButton, AttributeGroupName, SLink
} from "./modal.styles";

import Price from "components/shared/Price";

export default class ModalItem extends PureComponent {
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
                    <SLink to={`/product/${cartItem.item.name}`} onClick={() => this.props.setModal(false)}>
                        <ItemName>{cartItem.item.name}</ItemName>
                    </SLink>
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
                <Attributes itemID={itemID} item={cartItem.item} container={AttributesContainer} group={AttributeGroup} button={AttrButton} groupName={AttributeGroupName} />
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;
