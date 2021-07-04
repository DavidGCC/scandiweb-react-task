import React, { PureComponent } from "react";

import { AddToCartButton } from "./listings.styles";

import { ReactComponent as CartIcon } from "./svgs/CartIcon.svg";

export default class AddToCart extends PureComponent {
    render() {
        return (
            <AddToCartButton onClick={this.props.onClick}>
                <CartIcon />
            </AddToCartButton>
        );
    }
}
