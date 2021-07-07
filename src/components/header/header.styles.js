import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 28px 8vw;
`;

export const NavContainer = styled.div`
    display: flex;
    height: 100%;
    width: 16vw;
    justify-content: flex-start;
    align-items: center;
    flex: 0;
    padding-top: 24px;
`;

export const NavItem = styled.li`
`;

export const StyledNavLink = styled(NavLink)`
    padding: 4px 1vw 32px 1vw;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

export const CurrencySelect = styled.div`
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    width: 38px;
    height: 29px;
    position: relative;
    background-color: #ffffff;
    cursor: pointer;
    user-select: none;

    #arrow {
        margin-left: 10px;
    }

    #options {
        box-shadow: 0px 4px 35px 0px #A8ACB030;
        display: flex;
        flex-direction: column;
        width: 8vw;
        padding: 20px 2vw 20px 1vw;
        gap: 10px;
        position: absolute;
        left: -2vw;
        top: 50px;
        span {
            display: block;
        }
    }
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
    padding: 2px;
    min-width: 20px;
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
    gap: 2vw;
`;

export const LogoContainer = styled.div`
    margin: 0 auto;
    display: flex;
    width: 41px;
    align-items: center;
    justify-content: center;
`;
