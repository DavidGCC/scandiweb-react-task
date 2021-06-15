import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 110px;
`;

export const NavContainer = styled.div`
    display: flex;
    height: 100%;
    width: 235px;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
`;

export const NavItem = styled.li`
`;

export const StyledNavLink = styled(NavLink)`
    width: 97px;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 .5rem;
    border-bottom: ${(props) =>
        props.active ? "2px solid var(--nav-selected)" : "none"};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: var(--black);
    &:hover {
        color: var(--green);
    }
    &.active {
        color: var(--green);
        border-bottom: 2px solid var(--green);
    }
`;

export const CurrencySelect = styled.select`
    margin-right: 2rem;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    width: 38px;
    height: 29px;
    background-color: #ffffff;
    margin: 0 22px; 
`;

export const CartIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: relative;
`;

export const CartLink = styled(NavLink)`
    position: relative;
`;

export const CartItemCountShape = styled.div`
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 60px;
    position: absolute;
    top: -10px;
    left: 10px;
`;
export const CartItemCountContent = styled.span`
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    line-height: 16px;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
