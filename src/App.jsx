import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./scss/style.scss";

// COMPONENT IMPORTS
import Header from "./components/header";
import Category from "./components/category";
//

import { CurrencyContext } from "./context/CurrencyContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCurrencyChange = (e) => {
            e.preventDefault();
            this.setState((prevState) => ({
                ...prevState,
                currency: e.target.value,
            }));
        }
        this.state = { 
            currency: "USD",
            setCurrency: this.handleCurrencyChange,
        };
    }

    render() {
        return (
            <CurrencyContext.Provider value={{ currency: this.state.currency, setCurrency: this.state.setCurrency }}>
                <Router>
                    <Header
                        selectedCurrency={this.state.selectedCurrency}
                        handleCurrencyChange={this.handleCurrencyChange}
                    />
                    <Switch>
                        <Route path="/" component={Category}/>
                    </Switch>
                </Router>
            </CurrencyContext.Provider>
        );
    }
}

export default App;
