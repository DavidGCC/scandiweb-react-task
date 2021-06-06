import React from "react";

import { StoreContext } from "../../context/Context";
import { NavContainer, NavItem, NavLink } from "./header.styles";

class Navbar extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {({ categories }) => (
                    <NavContainer id="navbar">
                        {categories.map((c) => (
                            <NavItem className="nav-item" key={c}>
                                <NavLink to={`/listings/?category=${c}`}>
                                    {c}
                                </NavLink>
                            </NavItem>
                        ))}
                    </NavContainer>
                )}
            </StoreContext.Consumer>
        );
    }
}

export default Navbar;
