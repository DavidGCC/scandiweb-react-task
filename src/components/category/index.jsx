import React from "react";

import client from "../../graphql/client";
import { getItems } from "../../graphql/queries";

import Item from "./Item";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] }
    }
    componentDidMount() {
        client.query({
            query: getItems,
            variables: { name: this.props.selectedCategory}
        })
        .then((result) => this.setState(prevState => ({ ...prevState, items: result.data.category.products })))
    }
    render() {
        return (
            <div id="category-page">
                <h2 id="category-name">{this.props.selectedCategory === "" ? "All Categories" : this.props.selectedCategory}</h2>
                {
                    this.state.items.map(item => (
                        <Item key={item.name} item={item} />
                    ))
                }
            </div>
        );
    }
}

export default Category;