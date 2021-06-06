import { Link } from "react-router-dom";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 8rem;
`;

export const NavContainer = styled.div`
    display: flex;
    height: 100%;
    width: 235px;
    justify-content: space-evenly;
    align-items: center;
`;

export const NavItem = styled.li`
    text-transform: uppercase;
    list-style-type: none;
    margin: 0 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: ${(props) =>
        props.active ? "2px solid var(--nav-selected)" : "none"};
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: var(--nav-black);
    &:hover {
        color: var(--nav-selected);
    }
`;

export const CurrencySelect = styled.select`
    margin-right: 2rem;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;