import { createSlice } from "@reduxjs/toolkit";
const channelStore = createSlice({
    name: "channel",
    initialState: {
        channel: []
    },
    reducers: {
        changeChannel: (state, action) => {
            state.channel = action.payload
        }
    }
})
const { changeChannel } = channelStore.actions
const getChannelList = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:8888/students")
        const data = await res.json()
        dispatch(changeChannel(data))
    }

}
const channelReducer = channelStore.reducer
export { getChannelList }
export default channelReducer