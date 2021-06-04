import React, { Component } from 'react'
import styled from "styled-components";

import { StoreContext } from "../../../../context/Context";
import ModalItem from "./ModalItem";

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    width: 325px;
`;

const CartName = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

const ItemCount = styled.span`
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;
`;

export default class CartModal extends Component {
    render() {
        const cartEntries = Object.entries(this.context.cart);
        const totalPrice = 100;
        return (
            <ModalContainer>
                <div>
                    <CartName>My Bag,</CartName> <ItemCount>{Object.keys(this.context.cart).length}</ItemCount>
                </div>
                {
                    cartEntries.map(item => (
                        <ModalItem item={item[1]} key={item[0]} />
                    ))
                }
                <p>Total: { totalPrice }</p>
                <div>
                    <button>view bag</button>
                    <button>chekout</button>
                </div>
            </ModalContainer>
        )
    }
}

CartModal.contextType = StoreContext;
