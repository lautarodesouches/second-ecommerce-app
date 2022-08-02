import { createSlice } from '@reduxjs/toolkit'
import { products } from '../utils/products'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products
    },
    reducers: {

    }
})

//export const { incremented, decremented } = productSlice.actions

export default productSlice.reducer