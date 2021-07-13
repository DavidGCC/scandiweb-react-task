import React, { PureComponent } from "react";
import PropTypes from "prop-types";

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
    AttributeGroup, AttrButton, AttributeGroupName, ItemNameLink
} from "./modal.styles";

import Price from "components/shared/Price";

export default class ModalItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { cartItem: {} };
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
        const { itemID } = this.props;
        const { cart } = this.context;
        const { item, count } = cart[itemID];
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemNameLink to={`/product/${item.name}`} onClick={() => this.props.setModal(false)}>
                        <ItemName id="modal-item-name">{item.name}</ItemName>
                    </ItemNameLink>
                    <Price prices={item.prices} count={count}>
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
                    <ItemNumbers>{count}</ItemNumbers>
                    <CountControl
                        onClick={this.handleRemove}>
                        -
                    </CountControl>
                </Actions>
                <ImageContainer>
                    <ItemImage src={item.gallery[0]} />
                </ImageContainer>
                <Attributes itemID={itemID} item={item} container={AttributesContainer} group={AttributeGroup} button={AttrButton} groupName={AttributeGroupName} />
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;

ModalItem.propTypes = {
    itemID: PropTypes.string.isRequired,
    setModal: PropTypes.func
};