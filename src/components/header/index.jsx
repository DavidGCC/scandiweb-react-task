import React from "react";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Actions from "./Actions";

import { HeaderContainer } from "./header.styles";

class Header extends React.PureComponent {
    render() {
        const { selectedCurrency, handleCurrencyChange } = this.props;
        return (
            <HeaderContainer id="header">
                <Navbar />
                <Logo />
                <Actions selectedCurrency={selectedCurrency} handleChange={handleCurrencyChange} />
            </HeaderContainer>
        );
    }
}

Header.propTypes = {
    selectedCurrency: PropTypes.string,
    handleCurrencyChange: PropTypes.func
};

export default Header;