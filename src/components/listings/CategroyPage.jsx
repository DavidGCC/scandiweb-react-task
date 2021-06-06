import React, { Component } from "react";
import ProductList from "./ProductsList";

import { CategoryPage, CategortyName } from "./listings.styles";

export default class CategroyPage extends Component {
    render() {
        return (
            <CategoryPage>
                    <CategortyName id="category-name">
                        {this.props.selectedCategory === "all"
                            ? "All Categories"
                            : this.props.selectedCategory}
                    </CategortyName>
                    <ProductList
                        items={this.props.items}
                        selectedCategory={this.props.selectedCategory}
                    />
            </CategoryPage>
        );
    }
}
