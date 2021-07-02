// id generator for cart items
export const genID = () => Date.now().toString() + Math.random().toString(36).substr(2, 5);