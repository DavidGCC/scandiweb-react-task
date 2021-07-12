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
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
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

    nextImage() {
        const len = this.props.images.length;
        const { imageIndex } = this.state;
        if (imageIndex !== len - 1) {
            this.setState({ imageIndex: imageIndex + 1 });
        } else {
            this.setState({ imageIndex: 0 });
        }
    }

    previousImage() {
        const len = this.props.images.length;
        const { imageIndex } = this.state;
        if (imageIndex !== 0) {
            this.setState({ imageIndex: imageIndex - 1 });
        } else {
            this.setState({ imageIndex: len - 1 });
        }
    }
    
    render() {
        const { images } = this.props;
        const { imageIndex } = this.state;
        return (
            <CartItemImageContainer>
                <CartArrowPrevious onClick={this.previousImage} >
                    <Previous />
                </CartArrowPrevious>
                <img src={images[imageIndex]} alt="item" />
                <CartArrowNext onClick={this.nextImage}>
                    <Next />
                </CartArrowNext>
            </CartItemImageContainer>
        );
    }
}

CartImage.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};