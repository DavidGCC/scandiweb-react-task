import React, { Component } from "react";
import styled from "styled-components";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../../../context/Context";

const ItemContainer = styled.div`
    width: 90%;
    display: grid;
    height: 137px;
    grid-template-areas:
        "name actions img"
        "attrs actions img ";
    margin: 20px 0;
`;

const NameAndPrice = styled.div`
    grid-area: name;
    width: 136px;
    margin: 0 18px 27px 0;
    padding: 0;
    align-items: start;
`;

const AttributesContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: attrs;
`;

const AttributeGroup = styled.form`
    display: flex;
    flex-direction: row;
`;

const Actions = styled.div`
    grid-area: actions;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 137px;
`;

const ImageContainer = styled.div`
    grid-area: img;
    margin-left: 10px;
`;

const ItemName = styled.span`
    margin-bottom: 5px;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`;

const ItemNumbers = styled.span`
    display: block;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

const ItemPrice = styled(ItemNumbers)`
    text-align: left;
    margin: 0;
`;

const ItemCount = styled(ItemNumbers)``;

const ItemImage = styled.img`
    width: 105px;
    height: 137px;
    float: right;
    grid-area: img;
`;

const CountControl = styled.button`
    background-color: #ffffff;
    width: 24px;
    height: 24px;
    border: 1px solid var(--black);
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default class ModalItem extends Component {
    render() {
        const { item, count } = this.props.item;
        return (
            <ItemContainer>
                <NameAndPrice>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>
                        {item.prices.map((price) => {
                            if (price.currency === this.context.currency) {
                                return `${getSymbolFromCurrency(
                                    price.currency
                                )} ${price.amount}`;
                            }
                            return null;
                        })}
                    </ItemPrice>
                </NameAndPrice>
                <Actions>
                    <CountControl onClick={() => this.context.addToCart(item)}>+</CountControl>
                    <ItemCount>{count}</ItemCount>
                    <CountControl onClick={() => this.context.removeFromCart(item)}>-</CountControl>
                </Actions>
                <ImageContainer>
                    <ItemImage src={item.gallery[0]} />
                </ImageContainer>
                {/* <AttributesContainer>
                    {item.attributes.map((attr) => (
                        <AttributeGroup>
                            {attr.items.map((i) => (
                                <label>
                                    <input
                                        name={i.name}
                                        type="radio"
                                        key={i.id}
                                        value={i.value}
                                    />{i.displayValue}
                                </label>
                            ))}
                        </AttributeGroup>
                    ))}
                </AttributesContainer> */}
            </ItemContainer>
        );
    }
}

ModalItem.contextType = StoreContext;
