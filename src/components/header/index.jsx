import React from "react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Actions from "./Actions";

import { HeaderContainer } from "./styled";

class Header extends React.Component {
    render() {
        return (
            <HeaderContainer id="header">
                <Navbar />
                <Logo />
                <Actions selectedCurrency={this.props.selectedCurrency} handleChange={this.props.handleCurrencyChange} />
            </HeaderContainer>
        );
    }
}

export default Header;