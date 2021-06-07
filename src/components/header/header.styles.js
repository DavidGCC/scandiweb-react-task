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
    color: var(--black);
    &:hover {
        color: var(--green);
    }
`;

export const CurrencySelect = styled.select`
    margin-right: 2rem;
    border: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    width: 38px;
    height: 29px;
    background-color: #ffffff;
    margin: 0 22px; 
`;

export const CartIconContainer = styled.div`
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;