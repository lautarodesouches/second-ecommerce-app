import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product.slice'
import cartReducer from './cart.slice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})