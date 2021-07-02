import React from "react";
import qs from "query-string";

import { StoreContext } from "context/Context.js";
import CategoryPage from "./CategoryPage";

import { getItemsByCategory } from "graphql/queries";
import client from "graphql/client";

class Listings extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [] }
        this.fetchItems = this.fetchItems.bind(this);
    }

    fetchItems(category) {
        client.query({
            query: getItemsByCategory, variables: { title: category }
        }).then(response => {
            this.setState({ items: response.data.category.products });
        })
    }

    componentDidMount() {
        const parsed = qs.parse(this.props.location.search);
        this.context.setSelectedCategory(parsed.category);
        this.fetchItems(parsed.category);
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
            this.fetchItems(parsed.category);
        }
    }

    render() {
        const { selectedCategory } = this.context;
        return (
            <CategoryPage
                items={this.state.items.filter((item) => selectedCategory === item.category)}
                selectedCategory={selectedCategory}
            />
        );
    }
}
Listings.contextType = StoreContext;

export default Listings;
