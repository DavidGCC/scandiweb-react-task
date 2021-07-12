import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ProductList from "./ProductsList";
import { CategoryPageContainer, CategoryName, ItemsContainer } from "./listings.styles";

export default class CategoryPage extends PureComponent {
    render() {
        return (
            <CategoryPageContainer>
                <CategoryName id="category-name">
                    {this.props.selectedCategory === "all"
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

CategoryPage.propTypes = {
    selectedCategory: PropTypes.string,
    items: PropTypes.array
};
