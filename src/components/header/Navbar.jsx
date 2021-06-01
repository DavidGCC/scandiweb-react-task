import React from "react";
import { Link } from "react-router-dom";

import { getCategories } from "../../graphql/queries";
import client from "../../graphql/client";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { categories: ["all"] }
    }
    componentDidMount() {
        client
            .query({
                query: getCategories,
            })
            .then((response) => {
                const toSet = new Set(response.data.category.products.map(i => i.category));
                const toArr = Array.from(toSet);
                this.setState(prevState => ({ ...prevState, categories: ["all", ...toArr] }));
            })
    }
    render() {
        console.log(this.state.categories);
        return (
            <div id="navbar">
                {
                    this.state.categories.map(c => (
                        <li className="nav-item" key={c}>
                            <Link to={`/?category=${c}`}>{c}</Link>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default Navbar;
