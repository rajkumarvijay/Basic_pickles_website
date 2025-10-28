import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = { cart: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.cart.find((i) => i.id === action.item.id);
      if (exists) {
        return { ...state, cart: state.cart.map(x => x.id === action.item.id ? { ...x, qty: x.qty + 1 } : x) };
      }
      return { ...state, cart: [...state.cart, { ...action.item, qty: 1 }] };
    }
    case 'REMOVE':
      return { ...state, cart: state.cart.filter(x => x.id !== action.id) };
    case 'UPDATE_QTY':
      return { ...state, cart: state.cart.map(x => x.id === action.id ? { ...x, qty: action.qty } : x) };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItem = (item) => dispatch({ type: 'ADD', item });
  const removeItem = (id) => dispatch({ type: 'REMOVE', id });
  const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty });
  const total = state.cart.reduce((s, c) => s + c.price * c.qty, 0);

  return (
    <CartContext.Provider value={{ cart: state.cart, addItem, removeItem, updateQty, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
