import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../axios';
import requests from '../requests';


const initialState = {
    items: []
}

const movie = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie(state, action) {
            state.items = action.payload
        }
    }
})

export const { setMovie } = movie.actions
export const {selectMovie} = state => state.movie.items

export const fetchMovie = () => async (dispatch) => {
    const request = await axios.get(requests.fetchTrending)
    dispatch(setMovie(request.data.results))
    console.log(request.data.results)
}

export default movie.reducer








// const initialState = {
//     movie: [],
//     loading: false,
//     error: false,
// }

// export const bannerSlice = createSlice({
//     name: 'movie',
//     initialState,
//     reducers: {
//         setLoading: (state) => {
//             state.loading = true
//         },
//         setMovie: (state, {payload}) => {
//             state.loading = false
//             state.error = false
//             state.movie = payload
//         },
//         setError: (state) => {
//             state.error = true;
//         }
//     }
// })

// export const { setLoading, setMovie, setError } = bannerSlice.actions
// export const selectLoading = state => state.loading
// export const selectMovie = state => state.movie
// export const selectError = state => state.error
// export default bannerSlice.reducer

// export function fetchMovie() {
//     return async (dispatch) => {
//             axios.get(requests.fetchTrending).then((request) => {
//             dispatch(setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]))
//         })
//     }
// }