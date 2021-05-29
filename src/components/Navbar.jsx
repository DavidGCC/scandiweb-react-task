import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <li className="nav-item">
                    <a href="1">women</a>
                </li>
                <li className="nav-item">
                    <a href="2">men</a>
                </li>
                <li className="nav-item">
                    <a href="3">kids</a>
                </li>
            </div>
        );
    }
}

export default Navbar;
