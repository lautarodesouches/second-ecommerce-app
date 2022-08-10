import { createSlice } from '@reduxjs/toolkit'
import { URL_AUTH_SIGN_IN, URL_AUTH_SIGN_UP } from '../utils/firebaseUrls';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        email: null,
        address: null,
        creditCard: null,
        token: null,
        userId: null,
        message: null,
    },
    reducers: {
        updateAuth: (state, action) => {
            if (action.payload.name) state.name = action.payload.name
            if (action.payload.email) state.email = action.payload.email
            if (action.payload.address) state.address = action.payload.address
            if (action.payload.creditCard) state.creditCard = action.payload.creditCard
            if (action.payload.token) state.token = action.payload.token
            if (action.payload.userId) state.userId = action.payload.userId
            if (action.payload.message) state.message = action.payload.message
        },
        deleteMessage: (state) => {
            state.message = null
        },
        logout: (state) => {
            state.name = null
            state.address = null
            state.creditCard = null
            state.token = null
            state.userId = null
            state.message = null
        }
    }
})

export const auth = (isLogIn: boolean, email: string, password: string) => (
    async (dispatch: any) => {
        try {
            const response = await fetch(isLogIn ? URL_AUTH_SIGN_IN : URL_AUTH_SIGN_UP, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            const result = await response.json()

            dispatch(
                updateAuth({
                    email,
                    userId: result.localId,
                    token: result.idToken,
                    message: result.error?.message
                })
            )

        } catch (error) {
            console.log(error)
        }
    }
)

export const { updateAuth, deleteMessage, logout } = authSlice.actions

export default authSlice.reducer