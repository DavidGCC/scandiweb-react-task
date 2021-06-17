import React, { Component } from "react";

import { CartItemImageContainer, CartArrowNext, CartArrowPrevious } from "./cart.styles";


export default class CartImage extends Component {
    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };
        this.changeImage = this.changeImage.bind(this);
    }
    changeImage(dir) {
        const len = this.props.images.length;
        this.setState(ps => {
            if (ps.imageIndex + dir < 0) {
                return { imageIndex: len - 1 }
            }
            return { imageIndex: (ps.imageIndex + dir) % len }
        })
    }
    render() {
        return (
            <CartItemImageContainer>
                <CartArrowPrevious onClick={() => this.changeImage(-1)} >
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 13L1 7L7 1"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </CartArrowPrevious>
                <img src={this.props.images[this.state.imageIndex]} alt="item" width="100%" height="100%"/>
                <CartArrowNext onClick={() => this.changeImage(1)}>
                    <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 13L7 7L1 1"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </CartArrowNext>
            </CartItemImageContainer>
        );
    }
}
