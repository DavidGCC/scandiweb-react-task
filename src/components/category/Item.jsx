import React from "react";

import { CurrencyContext } from "../../context/CurrencyContext";

class Item extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-image" alt="item preview" src={this.props.item.gallery[0]} width="354px" height="330px"/>
                <h6 className="card-title">{this.props.item.name}</h6>
                {
                    this.props.item.prices.map(price => {
                        if (price.currency === this.context.currency) {
                            return <p key={this.props.item.name} className="card-price">{price.currency} {price.amount}</p>
                        }
                        return null;
                    })
                }
            </div>
        )
    }
}
Item.contextType = CurrencyContext;

export default Item;