import React, { Component } from "react";


import { ImageListContainer, ListImage } from "./product.styles";

export default class ImageGallery extends Component {
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
