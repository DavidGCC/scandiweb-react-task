import React, { PureComponent } from "react";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

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
            error: false
        };
        this.errorTimeout = null;
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

    componentDidUpdate(prevProps) {
        if (prevProps.item.name !== this.props.item.name) {
            this.setState({ chosenImage: this.props.item.gallery[0] });
        }
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
        const error = typeof this.state.error !== "boolean" 
            ? this.state.error.filter(i => i !== attr.id) 
            : false;
        this.setState({ savedAttributes: attributes, error });
    }

    isAttrActive(attr) {
        const isActive = this.state.savedAttributes.find(
            (savedAttr) =>
                savedAttr.id === attr.id && savedAttr.item?.id === attr.item.id
        );
        return Boolean(isActive);
    }

    handleAddToCart() {
        if (this.props.item.inStock) {
            const attriutesAreSelected = this.state.savedAttributes.every(i => i.item !== null);
            if (attriutesAreSelected) {
                this.context.addToCart(this.props.item, this.state.savedAttributes);
            } else {
                clearTimeout(this.errorTimeout);
                const nullAttrs = this.state.savedAttributes.flatMap(i => i.item === null ? i.id : []);
                this.setState({ error: nullAttrs });
                this.errorTimeout = setTimeout(() => this.setState({ error: false }), 4000);
            }
        }
    }

    render() {
        const { item } = this.props;
        const { chosenImage, error, savedAttributes } = this.state;
        return (
            <ProductContainer>
                <div>
                    <ImageGallery
                        images={item.gallery}
                        makeActive={this.makeActive}
                    />
                </div>
                <DetailsContainer>
                    <ProductImage src={chosenImage} />
                    <ProductDetailsContainer>
                        <ProductName>{item.name}</ProductName>
                        <Attributes
                            item={item}
                            chosenAttributes={savedAttributes}
                            handleClick={this.saveAttribute}
                            Container={AttributesContainer}
                            Group={AttributeGroup}
                            Button={AttributeButton}
                            GroupName={AttributeGroupName}
                            error={error}
                        />
                        <ProductPriceLabel>price:</ProductPriceLabel>
                        <Price prices={item.prices}>
                            {(symbol, amount) => {
                                return (
                                    <ProductPrice>{`${symbol}${amount}`}</ProductPrice>
                                );
                            }}
                        </Price>
                        <AddToCartButton
                            onClick={this.handleAddToCart}
                            inStock={item.inStock}>
                            {item.inStock ? "add to cart" : "out of stock"}
                        </AddToCartButton>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item.description),
                            }}></div>
                    </ProductDetailsContainer>
                </DetailsContainer>
            </ProductContainer>
        );
    }
}

ProductDetails.contextType = StoreContext;

ProductDetails.propTypes = {
    item: PropTypes.object.isRequired
};