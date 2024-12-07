import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exisitingItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );
            if (!exisitingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Item added to cart",
                    showConfirmButton: false,
                    timer: 1000,
                });
            } else {
                Swal.fire({
                    icon: "info",
                    title: "Item already exists in cart",
                });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload._id
            );
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

// export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
