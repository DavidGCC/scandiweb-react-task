import React from "react";
import qs from "query-string";

import client from "../../graphql/client";
import { getItems } from "../../graphql/queries";

import Item from "./Item";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], selectedCategory: "all" };
    }

    fetchItems(category) {
        const variables = { name: "" };
        if (typeof category === "undefined" || category === "all") {
            this.setState((prevState) => ({
                ...prevState,
                selectedCategory: "all",
            }));
            variables.name = "";
        } else {
            this.setState((prevState) => ({
                ...prevState,
                selectedCategory: category,
            }));
            variables.name = category;
        }
        client
            .query({
                query: getItems,
                variables,
            })
            .then((res) =>
                this.setState((prevState) => {
                    if (res.data.category) {
                        return {
                            ...prevState,
                            items: res.data.category.products,
                        };
                    } else {
                        return { ...prevState, items: null };
                    }
                })
            );
    }

    componentDidMount() {
        const parsed = qs.parse(this.props.location.search);
        this.fetchItems(parsed.category);
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
            this.fetchItems(parsed.category);
        }
    }

    render() {
        if (this.state.items === null) {
            return (
                <>
                    <h2 id="category-name">{this.state.selectedCategory}</h2>
                    <p class="error">Invalid Category Name</p>
                </>
            );
        }
        return (
            <div id="category-page">
                <h2 id="category-name">
                    {this.state.selectedCategory === "all"
                        ? "All Categories"
                        : this.state.selectedCategory}
                </h2>
                {this.state.items.map((item) => (
                    <Item key={item.name} item={item} />
                ))}
            </div>
        );
    }
}

export default Category;
