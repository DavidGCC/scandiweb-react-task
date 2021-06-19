import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import { StoreContext } from "context/Context";
import client from "graphql/client";
import { getCurrencies } from "graphql/queries";

import { CurrencySelect } from "./header.styles";

class CurrencySelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currencies: [], showOptions: false };
        this.toggleOptions = this.toggleOptions.bind(this);
        this.ref = React.createRef();
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    componentDidMount() {
        client.query({ query: getCurrencies }).then((res) =>
            this.setState((ps) => ({
                ...ps,
                currencies: res.data.currencies,
            }))
        );
        document.addEventListener("click", this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick);
    }
    handleOutsideClick(e) {
        if (this.ref && !this.ref.current.contains(e.target)) {
            this.setState({ showOptions: false });
        }
    }
    toggleOptions() {
        this.setState({ showOptions: !this.state.showOptions });
    }
    render() {
        return (
            <CurrencySelect onClick={this.toggleOptions} ref={this.ref} active={this.state.showOptions}>
                <span id="selected">{getSymbolFromCurrency(this.context.currency)}</span>
                {this.state.showOptions && (
                    <div id="options">
                        {this.state.currencies.map((curr) => {
                            return (
                                <span
                                    onClick={(e) =>
                                        this.context.setCurrency(curr)
                                    }>{`${getSymbolFromCurrency(
                                    curr
                                )} ${curr}`}</span>
                            );
                        })}
                    </div>
                )}
            </CurrencySelect>
        );
    }
}

CurrencySelector.contextType = StoreContext;

export default CurrencySelector;
