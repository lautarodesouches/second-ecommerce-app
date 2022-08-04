import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product.slice'
import cartReducer from './cart.slice'
import searchReducer from './search.slice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        search: searchReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})