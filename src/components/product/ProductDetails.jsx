import React, { Component } from "react";

import { StoreContext } from "../../context/Context";

import ImageGallery from "./ImageGallery";
import Attributes from "./Attributes";
import Price from "../shared/Price";

import {
    ProductContainer,
    GalleryContainer,
    DetailsContainer,
    ProductImage,
    ProductDetailsContainer,
    ProductName,
    ProductPriceLabel,
    ProductPrice,
    AddToCartButton,
    ProductDescription,
} from "./product.styles";

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
                    <ProductDetailsContainer>
                        <ProductName>{this.props.item.name}</ProductName>
                        <Attributes
                            isAttrActive={this.isAttrActive}
                            saveAttribute={this.saveAttribute}
                            attributes={this.props.item.attributes}
                        />
                        <ProductPriceLabel>price:</ProductPriceLabel>
                        <Price prices={this.props.item.prices}>
                            {(symbol, amount) => {
                                return (
                                    <ProductPrice>{`${symbol}${amount}`}</ProductPrice>
                                );
                            }}
                        </Price>
                        <AddToCartButton
                            onClick={() =>
                                this.context.addToCart(
                                    this.props.item,
                                    this.state.savedAttributes
                                )
                            }>
                            Add To Cart
                        </AddToCartButton>
                        <ProductDescription
                            dangerouslySetInnerHTML={{
                                __html: this.props.item.description,
                            }}></ProductDescription>
                    </ProductDetailsContainer>
                </DetailsContainer>
            </ProductContainer>
        );
    }
}

ProductDetails.contextType = StoreContext;
