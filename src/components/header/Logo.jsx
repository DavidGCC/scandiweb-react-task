import React from "react";

import { Link } from "react-router-dom";
import { LogoContainer } from "./header.styles";

import { ReactComponent as LogoSvg } from "./svgs/Logo.svg";

class Logo extends React.PureComponent {
    render() {
        return (
            <LogoContainer id="logo-container">
                <Link to="/">
                    <LogoSvg />
                </Link>
            </LogoContainer>
        );
    }
}

export default Logo;
