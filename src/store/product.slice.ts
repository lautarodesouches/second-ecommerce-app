import { createSlice } from '@reduxjs/toolkit'

const products: any[] = []

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addProducts: (state, action) => {
            state.products = [...state.products, ...action.payload]
        }
    }
})

export const { setProducts, addProducts } = productSlice.actions

export default productSlice.reducer