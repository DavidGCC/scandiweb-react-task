import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
    display: flex;
    height: 100%;
    width: 235px;
    justify-content: space-evenly;
    align-items: center;
`;

const NavItem = styled.li`
    text-transform: uppercase;
    list-style-type: none;
    margin: 0 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${props => props.active ? "2px solid var(--nav-selected)" : "none"};
`;

const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: var(--nav-black);
    &:hover {
        color: var(--nav-selected);
    }

`;

class Navbar extends React.Component {
    render() {
        return (
            <NavContainer id="navbar">
                {this.props.categories.map((c) => (
                    <NavItem className="nav-item" key={c}>
                        <NavLink to={`/listings/?category=${c}`}>
                            {c}
                        </NavLink>
                    </NavItem>
                ))}
            </NavContainer>
        );
    }
}

export default Navbar;
