import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    array: string[]
}

const initialState = {
    array: ['lorem', 'ispum'],
} satisfies CounterState as CounterState

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addToList(state, action: PayloadAction<string>) {
            state.array = [...state.array, action.payload]
        },
        deleteFromList(state, action: PayloadAction<string>) {
            console.log('action', action)
            state.array = state.array.filter((item) => item !== action.payload)
        },
    },
})

export const { addToList, deleteFromList } = listSlice.actions
export default listSlice.reducer
