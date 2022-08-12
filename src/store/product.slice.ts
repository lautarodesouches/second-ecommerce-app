import { createSlice } from '@reduxjs/toolkit'

const products: any[] = []

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = [...state.products, ...action.payload]
        }
    }
})

export const { addProducts } = productSlice.actions

export default productSlice.reducer