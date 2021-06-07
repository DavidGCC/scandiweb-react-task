import React from "react";
import qs from "query-string";

import { StoreContext } from "../../context/Context.js";
import CategoryPage from "./CategroyPage";

class Listings extends React.Component {
    componentDidMount() {
        const parsed = qs.parse(this.props.location.search);
        this.context.setSelectedCategory(parsed.category);
    }

    componentDidUpdate() {
        const parsed = qs.parse(this.props.location.search);
        if (
            !(
                typeof parsed.category === "undefined" &&
                this.context.selectedCategory === "all"
            ) &&
            parsed.category !== this.context.selectedCategory
        ) {
            this.context.setSelectedCategory(parsed.category);
        }
    }

    render() {
        const { items, selectedCategory } = this.context;
        return (
            <CategoryPage
                items={items.filter((item) =>
                    selectedCategory === "all"
                        ? true
                        : selectedCategory === item.category
                )}
                selectedCategory={selectedCategory}
            />
        );
    }
}
Listings.contextType = StoreContext;

export default Listings;
