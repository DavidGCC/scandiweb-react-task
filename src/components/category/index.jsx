import React from "react";

import client from "../../graphql/client";
import { getAllItems } from "../../graphql/queries";

import Item from "./Item";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] }
    }
    componentDidMount() {
        client.query({
            query: getAllItems
        })
        .then((result) => this.setState(prevState => ({ ...prevState, items: result.data.category.products })))
    }
    render() {
        return (
            <div>
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