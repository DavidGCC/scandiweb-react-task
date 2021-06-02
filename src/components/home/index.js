import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import { SLink, Container, Item } from "./home.styles"


export default class Home extends Component {
    render() {
        return (
            <Container>
                {
                    this.props.categories.map(c => (
                        <SLink to={`/listings?category=${c}`}>
                            <Item>{c}</Item>
                        </SLink>
                    ))
                }
            </Container>
        )
    }
}