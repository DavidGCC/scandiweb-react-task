import React, { Component } from 'react';

import { StoreContext } from "context/Context";

import CategoryPage from "components/listings/CategoryPage";

export default class Home extends Component {
    render() {
        return (
            <CategoryPage items={this.context.items} selectedCategory={this.context.selectedCategory} />
        )
    }
}

Home.contextType = StoreContext;