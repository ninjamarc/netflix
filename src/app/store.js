import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import movieReducer from '../features/bannerSlice'


export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        
    },
})