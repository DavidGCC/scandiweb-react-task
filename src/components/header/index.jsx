import React from "react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Actions from "./Actions";

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <Navbar />
                <Logo />
                <Actions selectedCurrency={this.props.selectedCurrency} handleChange={this.props.handleCurrencyChange} />
            </div>
        );
    }
}

export default Header;