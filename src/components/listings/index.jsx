import React from "react";
import qs from "query-string";

import { SLink } from "./listings.styles";

import { StoreContext } from "../../context/Context.js";
import Item from "./Item";

class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedCategory: "all" };
    }

    setCategory(category) {
        if (typeof category === "undefined" || category === "all") {
            this.setState((prevState) => ({
                ...prevState,
                selectedCategory: "all",
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                selectedCategory: category,
            }));
        }
    }

    componentDidMount() {
        const parsed = qs.parse(this.props.location.search);
        this.setCategory(parsed.category);
    }

    componentDidUpdate() {
        const parsed = qs.parse(this.props.location.search);
        if (
            !(
                typeof parsed.category === "undefined" &&
                this.state.selectedCategory === "all"
            ) &&
            parsed.category !== this.state.selectedCategory
        ) {
            this.setCategory(parsed.category);
        }
    }

    render() {
        return (
            <StoreContext.Consumer>
                {({ items }) => {
                    return items
                        .filter((item) => this.state.selectedCategory === "all" ? true : this.state.selectedCategory === item.category)
                        .map((item) => (
                            <div id="category-page" key={item.name}>
                                <h2 id="category-name">
                                    {this.state.selectedCategory === "all"
                                        ? "All Categories"
                                        : this.state.selectedCategory}
                                </h2>
                                <div className="item-listings">
                                    <SLink
                                        to={`/product/${encodeURI(item.name)}`}
                                        key={item.name}>
                                        <Item item={item} />
                                    </SLink>
                                </div>
                            </div>
                        ));
                }}
            </StoreContext.Consumer>
        );
    }
}

export default Listings;
