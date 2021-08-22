import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action) => { //setter functions
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogout: (state, action) => {
            state.userName = null
            state.userEmail = null
        }
    }
});

export const {  setUserLogin, setUserLogout } = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectEmail = state => state.user.userEmail

export default userSlice.reducer