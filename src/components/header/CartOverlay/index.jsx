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

    totalItemCount(cart) {
        return Object.values(cart).reduce((total, curr) => {
            total += curr.count;
            return total;
        }, 0);
    }

    render() {
        const { cart } = this.context;
        const cartItemCount = this.totalItemCount(cart);
        return (
            <div style={{ position: "relative" }}>
                <CartIconContainer
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleLeave}>
                    <CartLink to="/cart">
                        <CartIcon />
                        {cartItemCount > 0 ? (
                            <CartItemCountShape>
                                <CartItemCountContent>
                                    {cartItemCount}
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
