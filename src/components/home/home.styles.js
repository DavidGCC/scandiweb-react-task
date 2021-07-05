import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    width: 60%;
    height: 100%;
    margin: auto;
    margin-top: 80px;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Item = styled.div`
    width: 15vw;
    height: 200px;
    font-size: 1.5rem;
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