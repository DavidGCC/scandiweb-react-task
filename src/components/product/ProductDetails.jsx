import React, { Component } from "react";
import styled from "styled-components";

import ImageGallery from "./ImageGallery";
import Attributes from "./Attributes";

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 80px 220px 72px 120px;
`;

const GalleryContainer = styled.div``;

const DetailsContainer = styled.div`
    display: flex;
    gap: 100px;
`;

const ProductImage = styled.img`
    width: 610px;
    height: 511px;
`;

const ProductDescription = styled.div`
    width: 292;
`;

const ProductName = styled.h1`
    &::first-line {
        font-weight: 600;
    }
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
`;

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenImage: this.props.item.gallery[0],
            savedAttributes: [],
        };
        this.makeActive = this.makeActive.bind(this);
        this.saveAttribute = this.saveAttribute.bind(this);
        this.isAttrActive = this.isAttrActive.bind(this);
    }
    makeActive(img) {
        if (this.state.chosenImage !== img) {
            this.setState({ chosenImage: img });
        }
    }

    componentDidMount() {
        this.setState((prevState) => {
            const emptyAttrs = this.props.item.attributes.map((i) => {
                return {
                    id: i.id,
                    name: i.name,
                    type: i.type,
                    item: null,
                };
            });
            console.log(emptyAttrs);
            return { ...prevState, savedAttributes: emptyAttrs };
        });
    }

    saveAttribute(attr) {
        const attributes = this.state.savedAttributes.map((i) => {
            if (i.id === attr.id) {
                return {
                    ...i,
                    item: attr.item,
                };
            }
            return { ...i };
        });
        this.setState({ savedAttributes: attributes });
    }
    isAttrActive(attr) {
        const isActive = this.state.savedAttributes.find(
            (savedAttr) =>
                savedAttr.id === attr.id && savedAttr.item?.id === attr.item.id
        );
        return Boolean(isActive);
    }
    render() {
        return (
            <ProductContainer>
                <GalleryContainer>
                    <ImageGallery
                        images={this.props.item.gallery}
                        makeActive={this.makeActive}
                    />
                </GalleryContainer>
                <DetailsContainer>
                    <ProductImage src={this.state.chosenImage} />
                    <ProductDescription>
                        <ProductName>{this.props.item.name}</ProductName>
                        <Attributes
                            isAttrActive={this.isAttrActive}
                            saveAttribute={this.saveAttribute}
                            attributes={this.props.item.attributes}
                        />
                    </ProductDescription>
                </DetailsContainer>
            </ProductContainer>
        );
    }
}
