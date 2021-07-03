import React from "react";

import { StoreContext } from "context/Context";
import {
    ItemContainer,
    ItemImage,
    ItemName,
    ItemPrice,
    ItemTop,
    ItemBot,
    OutOfStockOverlay,
    OutOfStockText,
    ItemImageContainer
} from "./listings.styles";
import AddToCart from "./AddToCart";

import Price from "../shared/Price";

class Item extends React.PureComponent {
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
                    <ItemImageContainer>
                        <ItemImage
                            alt="item preview"
                            src={this.props.item.gallery[0]}
                            width="354px"
                            height="330px"
                        />
                    </ItemImageContainer>
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
                    <Price prices={this.props.item.prices}>
                        {
                            (symbol, amount) => (
                                <ItemPrice inStock={this.props.item.inStock}>{`${symbol}${amount}`}</ItemPrice>
                            )
                        }
                    </Price>
                </ItemBot>
            </ItemContainer>
        );
    }
}
Item.contextType = StoreContext;

export default Item;
