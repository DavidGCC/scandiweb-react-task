import React from "react";

export const StoreContext = React.createContext({
    currency: "USD",
    setCurrency: () => {},
    cart: {},
    addToCart: () => {},
    removeFromCart: () => {},
    addAttribute: () => {},
    categories: [],
    selectedCategory: "",
    setSelectedCategory: () => {},
});

