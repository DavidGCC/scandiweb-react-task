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
                const uniques = response.data.category.products.reduce((acc, curr) => {
                    if (!acc.includes(curr.category)) {
                        acc.push(curr.category);
                    }
                    return acc;
                }, []);
                this.setState(prevState => ({ ...prevState, categories: ["all", ...uniques] }));
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
