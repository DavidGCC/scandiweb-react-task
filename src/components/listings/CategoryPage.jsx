import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ProductList from "./ProductsList";
import { CategoryPageContainer, CategoryName, ItemsContainer } from "./listings.styles";

export default class CategoryPage extends PureComponent {
    render() {
        const { selectedCategory, items } = this.props;
        return (
            <CategoryPageContainer>
                <CategoryName id="category-name">
                    {selectedCategory === "all" || selectedCategory === ""
                        ? "All Categories"
                        : selectedCategory}
                </CategoryName>
                <ItemsContainer>
                    <ProductList
                        items={items}
                        selectedCategory={selectedCategory}
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
