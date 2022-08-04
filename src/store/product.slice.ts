import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../models/CartItem'

const products: [] = []
const cart: CartItem[] = []

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products,
        cart
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        deleteCartItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
})

export const { setProducts, addToCart, deleteCartItem } = productSlice.actions

export default productSlice.reducer