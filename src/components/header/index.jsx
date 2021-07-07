import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Actions from "./Actions";

import { HeaderContainer } from "./header.styles";

class Header extends React.PureComponent {
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

Header.propTypes = {
    selectedCurrency: PropTypes.string,
    handleCurrencyChange: PropTypes.func
};

export default Header;