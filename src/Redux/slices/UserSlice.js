import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.post(`http://13.48.43.204:3000/api/v1/user/login`, userCredentials);
        const response = await request.data;
        console.log(response, "rrrrrrr")
        return response;
    }
);

export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (userCredentials) => {
        const request = await axios.post(`http://13.48.43.204:3000/api/v1/user/signup`, userCredentials);
        const response = await request.data.data;
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        usr: null,
        error: null,
        token: ""
    },
    reducers: {
        login(state, action) {
            state.usr = action.payload.data
            state.token = action.payload.token
        },
        logout(state) {
            state.usr = null;
            state.token = null;
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.usr = action.payload.data;
                state.token = action.payload.token;
                state.error = null;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.usr = null;
                console.log(action.error.message)
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.usr = null;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.usr = action.payload;
                state.error = null;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.usr = null;
                console.log(action.error.message)
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Access Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message
                }
            })
    }
})
export default userSlice.reducer;