import React from "react";
import PropTypes from "prop-types";

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

import Price from "../shared/Price";

class Item extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ItemContainer>
                <ItemTop>
                    <ItemImageContainer>
                        <ItemImage
                            alt="item preview"
                            src={this.props.item.gallery[0]}
                            width="354px"
                            height="330px"
                        />
                    </ItemImageContainer>
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

Item.propTypes = {
    item: PropTypes.object
};

export default Item;
