import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: "posts",
    initialState: { value: []},
    reducers: {
        loadPosts: (state, action) =>{
            state.value = action.payload
        }
    }
})  
export const {loadPosts} = postsSlice.actions
export default postsSlice.reducer;