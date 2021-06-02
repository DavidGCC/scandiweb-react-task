import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                {
                    this.props.categories.map(c => (
                        <li className="nav-item" key={c}>
                            <Link to={`/listings/?category=${c}`}>{c}</Link>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export default Navbar;
