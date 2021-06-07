import React from "react";

import { StoreContext } from "../../context/Context";
import { NavContainer, NavItem, StyledNavLink } from "./header.styles";

class Navbar extends React.Component {
    isActive(match, location) {
        console.log(match, location, window.location);
        if (!location) return false;
    }
    render() {
        return (
            <StoreContext.Consumer>
                {({ categories }) => (
                    <NavContainer id="navbar">
                        {categories.map((c) => (
                            <StyledNavLink
                                to={`/listings/?category=${c}`}
                                activeClassName="active"
                                key={c}>
                                {c}
                            </StyledNavLink>
                        ))}
                    </NavContainer>
                )}
            </StoreContext.Consumer>
        );
    }
}

export default Navbar;
