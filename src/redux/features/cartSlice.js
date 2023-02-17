import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
      }
      state.cartTotal += 1;
      state.cartTotalPrice = (
        Number(state.cartTotalPrice) + action.payload.price
      ).toFixed(2);
    },
    removeFromCart(state, action) {
      const isInCart = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[isInCart].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        state.cartTotal -= 1;
        state.cartTotalPrice -= action.payload.price;
        return;
      }
      state.cartItems[isInCart] = {
        ...state.cartItems[isInCart],
        cartQuantity: state.cartItems[isInCart].cartQuantity - 1,
      };
      state.cartTotal -= 1;
      state.cartTotalPrice = (
        Number(state.cartTotalPrice) - action.payload.price
      ).toFixed(2);
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotal = 0;
      state.cartTotalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
