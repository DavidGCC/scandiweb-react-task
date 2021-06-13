import React, { Component } from "react";
import { Overlay as StyledOverlay } from "./modal.styles";

export default class Overlay extends Component {
    constructor(props) {
        super(props);
        this.state = { scroll: 0 };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        this.setState({ scroll: document.body.scrollTop });
    }

    componentDidMount() {
        document.body.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        document.body.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return <StyledOverlay scroll={this.state.scroll} />;
    }
}
