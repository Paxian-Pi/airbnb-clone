import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedFilter: '',
    windowDimension: {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    },
}

export const appSlice = createSlice({
    name: 'app',
    initialState: { value: initialState },
    reducers: {
        setSelectedFilter: (state, action) => {
            state.value.selectedFilter = action.payload
        },
        getDimensions: (state, action) => {
            state.value.windowDimension = action.payload
        }

    }
})

export const { getDimensions, setSelectedFilter } = appSlice.actions

export default appSlice.reducer