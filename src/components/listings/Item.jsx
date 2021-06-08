import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "../../context/Context";
import {
    ItemContainer,
    ItemImage,
    ItemName,
    ItemPrice,
    ItemTop,
    ItemBot,
    OutOfStockOverlay,
    OutOfStockText
} from "./listings.styles";
import AddToCart from "./AddToCart";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isHovering: false };
    }
    render() {
        return (
            <ItemContainer
                onMouseOver={() => this.setState({ isHovering: true })}
                onMouseLeave={() => this.setState({ isHovering: false })}>
                <ItemTop>
                    <ItemImage
                        alt="item preview"
                        src={this.props.item.gallery[0]}
                        width="354px"
                        height="330px"
                    />
                    {this.state.isHovering && this.props.item.inStock && (
                        <AddToCart
                            onClick={(e) => {
                                e.preventDefault();
                                this.context.addToCart(this.props.item);
                            }}
                        />
                    )}
                    {
                        !this.props.item.inStock && (
                            <OutOfStockOverlay>
                                <OutOfStockText>out of stock</OutOfStockText>
                            </OutOfStockOverlay>
                        ) 
                    }
                </ItemTop>
                <ItemBot>
                    <ItemName inStock={this.props.item.inStock}>{this.props.item.name}</ItemName>
                    {this.props.item.prices.map((price) => {
                        if (price.currency === this.context.currency) {
                            return (
                                <ItemPrice key={this.props.item.name} inStock={this.props.item.inStock}>
                                    {getSymbolFromCurrency(price.currency)}
                                    {price.amount}
                                </ItemPrice>
                            );
                        }
                        return null;
                    })}
                </ItemBot>
            </ItemContainer>
        );
    }
}
Item.contextType = StoreContext;

export default Item;
