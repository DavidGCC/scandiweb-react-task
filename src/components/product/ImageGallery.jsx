import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ImageListContainer, ListImage } from "./product.styles";

export default class ImageGallery extends PureComponent {
    render() {
        return (
            <ImageListContainer>
                {this.props.images.map((image) => (
                    <ListImage
                        src={image}
                        key={image}
                        onClick={() => this.props.makeActive(image)}
                    />
                ))}
            </ImageListContainer>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    makeActive: PropTypes.func.isRequired
};