import React, { Component } from "react";
import ProductList from "./ProductsList";

import { CategoryPage, CategortyName, ItemsContainer } from "./listings.styles";

export default class CategroyPage extends Component {
    render() {
        return (
            <CategoryPage>
                <CategortyName id="category-name">
                    {this.props.selectedCategory === "all"
                        ? "All Categories"
                        : this.props.selectedCategory}
                </CategortyName>
                <ItemsContainer>
                    <ProductList
                        items={this.props.items}
                        selectedCategory={this.props.selectedCategory}
                    />
                </ItemsContainer>
            </CategoryPage>
        );
    }
}
