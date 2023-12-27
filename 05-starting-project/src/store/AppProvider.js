import React, { useReducer } from "react"
import CartContext from "./CartContext"

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'add_item') {
        // concat method to create new array without editing existing array
        // const updatedItems = state.items.concat(action.target);
        let updatedItems;
        const updatedAmount = state.totalAmount + (action.target.price * action.target.amount);
        const findCartItem = state.items.findIndex((item) => item.id === action.target.id);
        const cartExist = state.items[findCartItem];
        // console.log(cartExist)
        if (cartExist) {
            const updatedItem = {
                ...cartExist,
                amount: cartExist.amount + action.target.amount,
            };
            updatedItems = [...state.items];
            updatedItems[findCartItem] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.target);
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }
    if (action.type === 'remove_item') {
        const findCartItem = state.items.findIndex((item) => item.id === action.id);
        const cartExist = state.items[findCartItem];
        // total amount will be decreased by the price of one single removed item
        console.log(cartExist)
        const updatedAmount = state.totalAmount - cartExist.price
        let updatedItems
        console.log(cartExist)
        if (cartExist.amount === 1) {
            updatedItems = state.items.filter((item) => (item.id !== action.id));
        } else {
            const updatedItem = { ...cartExist, amount: cartExist.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[findCartItem] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }
    return defaultCartState;
};
const AppProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'add_item', target: item })
    };
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'remove_item', id: id })
    };
    const setContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (<CartContext.Provider value={setContext}>{props.children}</CartContext.Provider>)
}

export default AppProvider