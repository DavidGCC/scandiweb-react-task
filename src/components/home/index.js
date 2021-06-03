import React, { Component } from 'react';

import { SLink, Container, Item } from "./home.styles"


export default class Home extends Component {
    render() {
        return (
            <Container>
                {
                    this.props.categories.map(c => (
                        <SLink to={`/listings?category=${c}`} key={c}>
                            <Item>{c}</Item>
                        </SLink>
                    ))
                }
            </Container>
        )
    }
}