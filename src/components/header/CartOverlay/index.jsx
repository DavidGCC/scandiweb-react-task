import React from "react";

import { StoreContext } from "context/Context";

import {
    CartItemCountShape,
    CartItemCountContent,
    CartIconContainer,
    CartLink
} from "../header.styles";


import CartModal from "./CartModal";
import Overlay from "./CartModal/Overlay";

import { ReactComponent as CartIcon } from "./svgs/CartIcon.svg";

class CartOverlay extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.handleLeave = this.handleLeave.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.setModal = this.setModal.bind(this);
        this.timeout = null;
    }

    setModal(bool) {
        this.setState({ showModal: bool });
    }

    handleLeave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(
            () => this.setModal(false),
            500
        );
    }

    handleMouseOver() {
        clearTimeout(this.timeout);
        if (this.state.showModal !== true) {
            this.setModal(true);
        }
    }

    render() {
        const cartItems = Object.entries(this.context.cart).length;
        return (
            <div style={{ position: "relative" }}>
                <CartIconContainer
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleLeave}>
                    <CartLink to="/cart">
                        <CartIcon />
                        {cartItems > 0 ? (
                            <CartItemCountShape>
                                <CartItemCountContent>
                                    {cartItems}
                                </CartItemCountContent>
                            </CartItemCountShape>
                        ) : null}
                    </CartLink>
                    {this.state.showModal && (
                        <CartModal
                            onMouseLeave={this.handleLeave}
                            onMouseOver={this.handleMouseOver}
                            setModal={this.setModal}
                        />
                    )}
                </CartIconContainer>
                {this.state.showModal && <Overlay />}
            </div>
        );
    }
}

CartOverlay.contextType = StoreContext;

export default CartOverlay;
