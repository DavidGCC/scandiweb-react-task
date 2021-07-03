import React, { PureComponent } from "react";
import { ModalFooterContainer, ViewBagButton, CheckOutButton, SLink } from "./modal.styles";


export default class FooterButtons extends PureComponent {
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
