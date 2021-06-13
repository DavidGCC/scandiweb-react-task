import React, { Component } from "react";
import { ModalFooterContainer, ViewBagButton, CheckOutButton, SLink } from "./modal.styles";


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
