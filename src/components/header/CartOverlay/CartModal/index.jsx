import React, { Component } from "react";
import styled from "styled-components";

import { StoreContext } from "../../../../context/Context";
import ModalItem from "./ModalItem";
import FooterButtons from "./FooterButtons";
import TotalPrice from "./TotalPrice";

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 77vw;
    top: 5rem;
    width: 325px;
    background-color: #fff;
    z-index: 2;
    padding: 20px;
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
        const totalPrice = cartEntries.reduce((total, curr) => {
            console.log(curr[1]);
            const price = curr[1].item.prices.find(i => i.currency === this.context.currency);
            total += curr[1].count * price.amount;
            return total;
        }, 0);        
        return (
            <>
                <ModalContainer>
                    <div>
                        <CartName>My Bag,</CartName>{" "}
                        <ItemCount>
                            {Object.keys(this.context.cart).length}
                        </ItemCount>
                    </div>
                    {cartEntries.map((item) => (
                        <ModalItem item={item[1]} key={item[0]} />
                    ))}
                    <TotalPrice totalPrice={Math.round(totalPrice*100)/100} />
                    <FooterButtons />
                </ModalContainer>
            </>
        );
    }
}

CartModal.contextType = StoreContext;
