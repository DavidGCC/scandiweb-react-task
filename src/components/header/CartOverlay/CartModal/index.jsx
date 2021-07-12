import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { StoreContext } from "context/Context";
import ModalItem from "./ModalItem";
import FooterButtons from "./FooterButtons";
import TotalPrice from "./TotalPrice";

import { ModalContainer, CartName, ItemCount } from "./modal.styles";

import { getTotalPrice } from "utils";

export default class CartModal extends PureComponent {
    render() {
        const { cart, currency } = this.context;
        const cartEntries = Object.entries(cart);
        const totalPrice = getTotalPrice(cart, currency);
        return (
            <>
                <ModalContainer>
                    <div>
                        <CartName>My Bag,</CartName>
                        &nbsp;
                        <ItemCount>
                            {Object.keys(cart).length} items
                        </ItemCount>
                    </div>
                    {cartEntries.map((item) => (
                        <ModalItem itemID={item[0]} key={item[0]} setModal={this.props.setModal}/>
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

CartModal.propTypes = {
    setModal: PropTypes.func
};