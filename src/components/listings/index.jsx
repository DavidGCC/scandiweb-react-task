import React from "react";
import qs from "query-string";

import { StoreContext } from "../../context/Context.js";
import ProductList from "./ProductsList";

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
                {({ items }) => (
                    <>
                        <h2 id="category-name">
                            {this.state.selectedCategory === "all"
                                ? "All Categories"
                                : this.state.selectedCategory}
                        </h2>
                        <ProductList
                            items={items.filter((item) =>
                                this.state.selectedCategory === "all"
                                    ? true
                                    : this.state.selectedCategory ===
                                      item.category
                            )}
                            selectedCategory={this.state.selectedCategory}
                        />
                    </>
                )}
            </StoreContext.Consumer>
        );
    }
}

export default Listings;
