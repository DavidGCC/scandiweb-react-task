import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./scss/style.scss";

// COMPONENT IMPORTS
import Header from "./components/header";
import Listings from "./components/listings";
import Home from "./components/home/";
import Product from "./components/product/";
import Cart from "./components/cart/";
//

import { getItems } from "./graphql/queries";
import client from "./graphql/client";

import { StoreContext } from "./context/Context";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "USD",
            setCurrency: this.handleCurrencyChange,
            categories: ["all"],
            items: [],
            cart: {},
            selectedCategory: "all",
        };
        this.addToCart = this.addToCart.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.setSelectedCategory = this.setSelectedCategory.bind(this);
    }
    setSelectedCategory(category) {
        if (typeof category === "undefined" || category === "all") {
            this.setState({ selectedCategory: "all" });
        } else {
            this.setState({ selectedCategory: category });
        }
    }
    addToCart(item) {
        let cart = this.state.cart;
        if (cart[item.name]) {
            cart[item.name].count++;
        } else {
            cart[item.name] = {
                item,
                count: 1,
            };
        }
        this.setState({ cart });
    }
    handleCurrencyChange(e) {
        e.preventDefault();
        this.setState({ currency: e.target.value });
    }
    componentDidMount() {
        client
            .query({
                query: getItems,
            })
            .then((response) => {
                const uniques = response.data.category.products.reduce(
                    (acc, curr) => {
                        if (!acc.includes(curr.category)) {
                            acc.push(curr.category);
                        }
                        return acc;
                    },
                    []
                );
                this.setState((prevState) => ({
                    ...prevState,
                    categories: ["all", ...uniques],
                    items: response.data.category.products,
                }));
            });
    }

    render() {
        return (
            <StoreContext.Provider
                value={{
                    ...this.state,
                    setCurrency: this.handleCurrencyChange,
                    addToCart: this.addToCart,
                    setSelectedCategory: this.setSelectedCategory
                }}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/listings" component={Listings} />
                        <Route path="/product/:itemname" component={Product} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
        );
    }
}

export default App;
