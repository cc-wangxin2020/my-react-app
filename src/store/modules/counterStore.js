import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incremented: (state) => {
            state.count += 1
        },
        decremented: (state) => {
            state.count -= 1
        }
    }
})

const {incremented, decremented} = counterStore.actions 
const counterReducer = counterStore.reducer

export { incremented, decremented}
export default counterReducer