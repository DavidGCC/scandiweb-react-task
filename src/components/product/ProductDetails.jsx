import React, { PureComponent } from "react";
import DOMPurify from "dompurify";

import { StoreContext } from "context/Context";

import ImageGallery from "./ImageGallery";
// import Attributes from "./Attributes";
import Price from "components/shared/Price";
import Attributes from "components/shared/Attributes";

import {
    ProductContainer,
    DetailsContainer,
    ProductImage,
    ProductDetailsContainer,
    ProductPriceLabel,
    AddToCartButton,
    ProductName,
    ProductPrice,
} from "./product.styles";

import {
    AttributesContainer,
    AttributeGroup,
    AttributeGroupName,
    AttributeButton,
} from "components/shared/shared.styles";

export default class ProductDetails extends PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            chosenImage: this.props.item.gallery[0],
            savedAttributes: [],
        };
        this.makeActive = this.makeActive.bind(this);
        this.saveAttribute = this.saveAttribute.bind(this);
        this.isAttrActive = this.isAttrActive.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
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

    saveAttribute({ attr }) {
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
    
    handleAddToCart() {
        if (this.props.item.inStock) this.context.addToCart(this.props.item, this.state.savedAttributes);
    }
    
    render() {
        return (
            <ProductContainer>
                <div>
                    <ImageGallery
                        images={this.props.item.gallery}
                        makeActive={this.makeActive}
                    />
                </div>
                <DetailsContainer>
                    <ProductImage src={this.state.chosenImage} />
                    <ProductDetailsContainer>
                        <ProductName>{this.props.item.name}</ProductName>
                        <Attributes
                            item={this.props.item}
                            chosenAttributes={this.state.savedAttributes}
                            handleClick={this.saveAttribute}
                            container={AttributesContainer}
                            group={AttributeGroup}
                            button={AttributeButton}
                            groupName={AttributeGroupName}
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
                            onClick={this.handleAddToCart}
                            inStock={this.props.item.inStock}>
                            {this.props.item.inStock ? "add to cart" : "out of stock"}
                        </AddToCartButton>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(this.props.item.description),
                            }}></div>
                    </ProductDetailsContainer>
                </DetailsContainer>
            </ProductContainer>
        );
    }
}

ProductDetails.contextType = StoreContext;
