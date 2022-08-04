import { createSlice } from '@reduxjs/toolkit'

const query: string = ''

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query
    },
    reducers: {
        setGlobalQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

export const { setGlobalQuery } = searchSlice.actions

export default searchSlice.reducer