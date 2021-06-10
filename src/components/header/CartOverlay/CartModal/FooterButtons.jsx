import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalFooterContainer = styled.div`
    display: flex;
`;

const ButtonCommon = styled.button`
    width: 140px;
    height: 43px;
    font-size: 14px;
    line-height: 16.8px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.5s ease;
    &:active {
        transform: scale(0.95, 0.95);
    }
`;

const ViewBagButton = styled(ButtonCommon)`
    background-color: #fff;
    border: 1px solid var(--black);
    color: var(--black);
    margin-right: 12px;
`;

const CheckOutButton = styled(ButtonCommon)`
    background-color: var(--green);
    color: #fff;
    border: none;
`;

const SLink = styled(Link)`
    text-decoration: none;
`;

export default class FooterButtons extends Component {
    render() {
        return (
            <ModalFooterContainer>
                <SLink to="/cart">
                    <ViewBagButton>view bag</ViewBagButton>
                </SLink>
                <CheckOutButton>check out</CheckOutButton>
            </ModalFooterContainer>
        );
    }
}
