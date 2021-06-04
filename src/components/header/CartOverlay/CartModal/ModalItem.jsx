import React, { Component } from "react";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../../../context/Context";

const ItemContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-areas:
        "name actions img"
        "attrs actions img ";
    grid-gap: 1rem;
`;

const NameAndPrice = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: name;
    align-items: flex-start;
`;

const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: attrs;
`;

const AttributeGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

const Actions = styled.div`
    grid-area: actions;
`;

const ImageContainer = styled.div`
    grid-area: img;
`;

const ItemName = styled.p`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`;

const ItemNumbers = styled.p`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

const ItemImage = styled.img`
    width: 105px;
    height: 137px;
    float: right;
    grid-area: img;
`;

export default class ModalItem extends Component {
    render() {
        const { item, count } = this.props.item;
        console.log(item);
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemName>{item.name}</ItemName>
                    <ItemNumbers>
                        {item.prices.map((price) => {
                            if (price.currency === this.context.currency) {
                                return `${getSymbolFromCurrency(
                                    price.currency
                                )} ${price.amount}`;
                            }
                            return null;
                        })}
                    </ItemNumbers>
                </NameAndPrice>
                <Actions>
                    <button>+</button>
                    <ItemNumbers>{count}</ItemNumbers>
                    <button>-</button>
                </Actions>
                <ImageContainer>
                    <ItemImage src={item.gallery[0]} />
                </ImageContainer>
                <AttributesContainer>
                    {item.attributes.map((attr) => (
                        <AttributeGroup>
                            {attr.items.map((i) => (
                                <>
                                    <input
                                        name={i.name}
                                        type="radio"
                                        key={i.id}
                                        value={i.value}
                                    />
                                    {i.displayValue}
                                </>
                            ))}
                        </AttributeGroup>
                    ))}
                </AttributesContainer>
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;