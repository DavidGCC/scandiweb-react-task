import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { CartItemImageContainer, CartArrowNext, CartArrowPrevious } from "./cart.styles";

import { ReactComponent as Next } from "./svgs/Next.svg";
import { ReactComponent as Previous } from "./svgs/Previous.svg";


export default class CartImage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(dir) {
        const len = this.props.images.length;
        this.setState(ps => {
            if (ps.imageIndex + dir < 0) {
                return { imageIndex: len - 1 };
            }
            return { imageIndex: (ps.imageIndex + dir) % len };
        });
    }
    
    render() {
        return (
            <CartItemImageContainer>
                <CartArrowPrevious onClick={() => this.changeImage(-1)} >
                    <Previous />
                </CartArrowPrevious>
                <img src={this.props.images[this.state.imageIndex]} alt="item" />
                <CartArrowNext onClick={() => this.changeImage(1)}>
                    <Next />
                </CartArrowNext>
            </CartItemImageContainer>
        );
    }
}

CartImage.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};