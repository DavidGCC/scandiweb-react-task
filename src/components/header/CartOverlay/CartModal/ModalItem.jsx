import React, { Component } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../../../context/Context";
import Attributes from "./Attributes";

import { ItemContainer, NameAndPrice, Actions, ImageContainer, ItemName, ItemNumbers, ItemPrice, ItemImage, CountControl } from "./modal.styles";

import Price from "../../../shared/Price";
export default class ModalItem extends Component {
    render() {
        const { item, count } = this.props.item;
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemName>{item.name}</ItemName>
                    <Price prices={item.prices}>
                        {
                            (symbol, amount) => (
                                <ItemPrice>{symbol}{amount}</ItemPrice>
                            )
                        }
                    </Price>
                </NameAndPrice>
                <Actions>
                    <CountControl onClick={() => this.context.addToCart(item)}>
                        +
                    </CountControl>
                    <ItemNumbers>{count}</ItemNumbers>
                    <CountControl
                        onClick={() => this.context.removeFromCart(item)}>
                        -
                    </CountControl>
                </Actions>
                <ImageContainer>
                    <ItemImage src={item.gallery[0]} />
                </ImageContainer>
                <Attributes item={item} />  
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;
