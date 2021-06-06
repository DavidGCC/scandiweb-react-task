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
} from "./listings.styles";
import AddToCart from "./AddToCart";

class Item extends React.Component {
    render() {
        console.log(this.context);
        return (
            <ItemContainer className="card">
                <ItemTop className="top">
                    <ItemImage
                        className="card-image"
                        alt="item preview"
                        src={this.props.item.gallery[0]}
                        width="354px"
                        height="330px"
                    />
                    <AddToCart
                        onClick={(e) => {
                            e.preventDefault();
                            this.context.addToCart(this.props.item);
                        }}
                    />
                </ItemTop>
                <ItemBot>
                    <ItemName className="card-title">
                        {this.props.item.name}
                    </ItemName>
                    {this.props.item.prices.map((price) => {
                        if (price.currency === this.context.currency) {
                            return (
                                <ItemPrice
                                    key={this.props.item.name}
                                    className="card-price">
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
