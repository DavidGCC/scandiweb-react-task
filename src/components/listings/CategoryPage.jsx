import React, { Component } from "react";
import ProductList from "./ProductsList";

import { CategoryPageContainer, CategoryName, ItemsContainer } from "./listings.styles";

export default class CategoryPage extends Component {
    render() {
        return (
            <CategoryPageContainer>
                <CategoryName id="category-name">
                    {this.props.selectedCategory === ""
                        ? "All Categories"
                        : this.props.selectedCategory}
                </CategoryName>
                <ItemsContainer>
                    <ProductList
                        items={this.props.items}
                        selectedCategory={this.props.selectedCategory}
                    />
                </ItemsContainer>
            </CategoryPageContainer>
        );
    }
}
