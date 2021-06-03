import React, { Component } from 'react';

import { SLink, Container, Item } from "./home.styles"

import { StoreContext } from "../../context/Context";

export default class Home extends Component {
    render() {
        return (
            <StoreContext.Consumer>
                {
                    ({ categories }) => (
                        <Container>
                            {
                                categories.map(c => (
                                    <SLink to={`/listings?category=${c}`} key={c}>
                                        <Item>{c}</Item>
                                    </SLink>
                                ))
                            }
                        </Container>
                    )
                }
            </StoreContext.Consumer>
        )
    }
}