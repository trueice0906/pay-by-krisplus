import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: any[];
  cartTotal: number;
  cartCount: number;
}

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

const calculateCartTotals = (cartItems: any[]) => {
  let total = 0;
  let count = 0;
  cartItems.forEach((cartItem: any) => {
    total += cartItem.quantity * cartItem.price;
    count += cartItem.quantity;
  });

  return { total, count };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: any, action: PayloadAction<any[]>) => {
      const cartItems = state.cartItems;
      const product: any = action.payload;
      const existingProduct = cartItems.find(
        (cartItem: any) => cartItem.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartItems.push({ ...product, quantity: 1 });
      }
      const { total, count } = calculateCartTotals(cartItems);
      state.cartTotal = total;
      state.cartCount = count;
    },
    removeItemFromCart: (state: any, action: PayloadAction<any>) => {
      const existingProduct = state.cartItems.find(
        (cartItem: any) => cartItem.id === action.payload.id
      );
      if (existingProduct.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem: any) => cartItem.id !== action.payload.id
        );
      } else {
        existingProduct.quantity -= 1;
      }
      const { total, count } = calculateCartTotals(state.cartItems);
      state.cartTotal = total;
      state.cartCount = count;
    },
    clearItemFromCart: (state: any, action: PayloadAction<any>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem: any) => cartItem.id !== action.payload.id
      );
      const { total, count } = calculateCartTotals(state.cartItems);
      state.cartTotal = total;
      state.cartCount = count;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export default cartSlice;
