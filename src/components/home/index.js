import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                {
                    this.props.categories.map(c => (
                        <li className="nav-item" key={c}>
                            <Link to={`/listings?category=${c}`}>{c}</Link>
                        </li>
                    ))
                }
            </div>
        )
    }
}