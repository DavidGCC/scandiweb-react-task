import React, { Component } from "react";

import styled from "styled-components";

const ImageListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const ListImage = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;
`;

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
