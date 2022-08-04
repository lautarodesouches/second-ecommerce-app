import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../models/CartItem'

const cart: CartItem[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.cart = []
        }
    }
})

export const { addToCart, deleteCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer