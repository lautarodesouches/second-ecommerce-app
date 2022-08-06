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
            let findItem = state.cart.find(item => (item.id === action.payload.id && item.color === action.payload.color))
            if (findItem) {
                findItem.shipping += action.payload.shipping
                findItem.quantity += action.payload.quantity
                let cartFilter = state.cart.filter(item => (item.id !== action.payload.id || item.color !== action.payload.color))
                cartFilter.push(findItem)
                state.cart = [...cartFilter]
            } else {
                state.cart.push(action.payload)
            }
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter(item => (item.id !== action.payload.id || item.color !== action.payload.color))
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, deleteCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer