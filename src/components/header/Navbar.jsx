import React from "react";

import { StoreContext } from "context/Context";
import { NavContainer, StyledNavLink } from "./header.styles";

class Navbar extends React.Component {
    render() {
        const { categories } = this.context;
        return (
            <NavContainer id="navbar">
                {categories.map((c) => (
                    <StyledNavLink
                        to={`/listings/?category=${c}`}
                        activeClassName="active"
                        isActive={(match, location) => location.pathname + location.search === `/listings/?category=${c}`}
                        key={c}>
                        {c}
                    </StyledNavLink>
                ))}
            </NavContainer>
        );
    }
}
Navbar.contextType = StoreContext;

export default Navbar;
