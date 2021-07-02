import React, { PureComponent } from "react";

import { StoreContext } from "context/Context";
import ModalItem from "./ModalItem";
import FooterButtons from "./FooterButtons";
import TotalPrice from "./TotalPrice";

import { ModalContainer, CartName, ItemCount } from "./modal.styles";

export default class CartModal extends PureComponent {
    render() {
        const cartEntries = Object.entries(this.context.cart);
        const totalPrice = cartEntries.reduce((total, curr) => {
            const price = curr[1].item.prices.find(
                (i) => i.currency === this.context.currency
            );
            total += curr[1].count * price.amount;
            return total;
        }, 0);
        return (
            <>
                <ModalContainer>
                    <div>
                        <CartName>My Bag,</CartName>
                        &nbsp;
                        <ItemCount>
                            {Object.keys(this.context.cart).length} items
                        </ItemCount>
                    </div>
                    {cartEntries.map((item) => (
                        <ModalItem itemID={item[0]} key={item[0]} />
                    ))}
                    <TotalPrice
                        totalPrice={Math.round(totalPrice * 100) / 100}
                    />
                    <FooterButtons />
                </ModalContainer>
            </>
        );
    }
}

CartModal.contextType = StoreContext;
