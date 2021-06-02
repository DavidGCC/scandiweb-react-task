import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    margin: 1rem 2rem;
    margin: auto;
    justify-content: space-between;
`;

export const Item = styled.div`
    width: 300px;
    height: 30vh;
    font-size: 1.5vw;
    font-weight: 600;
    text-transform: capitalize;
    background-color: #F0F8FF;
    padding: 1.3rem 2.3rem;
    color: #1D1F22;
    &:hover {
        color: #5ECE7B
    }
`;

export const SLink = styled(Link)`
    text-decoration: none;
    color: #1D1F22;
    &:hover {
        color: #5ECE7B
    }
`;