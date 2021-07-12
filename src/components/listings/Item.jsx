import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

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
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMouseEnter() {
        this.setState({ isHovering: true });
    }

    handleMouseleave() {
        this.setState({ isHovering: false });
    }

    handleClick(e) {
        e.preventDefault();
        const { item, history } = this.props;
        if (item.attributes.length === 0) {
            this.context.addToCart(item);
        } else {
            history.push(`/product/${item.name}`);
        }
    }



    render() {
        const { isHovering } = this.state;
        const { item } = this.props;
        return (
            <ItemContainer onMouseOver={this.handleMouseEnter} onMouseLeave={this.handleMouseleave}>
                <ItemTop>
                    <ItemImageContainer>
                        <ItemImage
                            alt="item preview"
                            src={item.gallery[0]}
                            width="354px"
                            height="330px"
                        />
                    </ItemImageContainer>
                    {
                        isHovering && item.inStock && (
                            <AddToCart onClick={this.handleClick} />
                        )
                    }
                    {
                        !item.inStock && (
                            <OutOfStockOverlay>
                                <OutOfStockText>out of stock</OutOfStockText>
                            </OutOfStockOverlay>
                        )
                    }
                </ItemTop>
                <ItemBot>
                    <ItemName inStock={item.inStock}>{item.name}</ItemName>
                    <Price prices={item.prices}>
                        {
                            (symbol, amount) => (
                                <ItemPrice inStock={item.inStock}>{`${symbol}${amount}`}</ItemPrice>
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
    item: PropTypes.object,
    history: PropTypes.object
};

export default withRouter(Item);
