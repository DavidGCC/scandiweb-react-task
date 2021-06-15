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
            categories: [],
            items: [],
            cart: {},
            selectedCategory: "",
        };
        this.addToCart = this.addToCart.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.setSelectedCategory = this.setSelectedCategory.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.addAttribute = this.addAttribute.bind(this);
    }
    setSelectedCategory(category) {
        if (typeof category === "undefined") {
            this.setState({ selectedCategory: "" });
        } else {
            this.setState({ selectedCategory: category });
        }
    }
    addToCart(item, attrs = null) {
        let cart = this.state.cart;
        if (cart[item.name]) {
            cart[item.name].count++;
        } else {
            const attributes = attrs ? attrs : item.attributes.reduce((res, curr) => {
                res = [
                    ...res,
                    {
                        id: curr.id,
                        name: curr.name,
                        type: curr.type,
                        item: null,
                    },
                ];
                return res;
            }, []);
            cart[item.name] = {
                item,
                count: 1,
                chosenAttributes: attributes,
            };
        }
        this.setState({ cart });
    }
    addAttribute(item, attribute) {
        let cart = this.state.cart;
        let chosenAttributes = cart[item.name].chosenAttributes;
        chosenAttributes = chosenAttributes.map((i) => {
            if (i.id === attribute.id) {
                return {
                    ...i,
                    item: attribute.item,
                };
            }
            return i;
        });
        cart[item.name].chosenAttributes = chosenAttributes;
        this.setState({ cart });
    }
    removeFromCart(item) {
        let cart = this.state.cart;
        if (cart[item.name].count > 1) {
            cart[item.name].count--;
        } else {
            delete cart[item.name];
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
                    categories: [...uniques],
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
                    setSelectedCategory: this.setSelectedCategory,
                    removeFromCart: this.removeFromCart,
                    addAttribute: this.addAttribute
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
