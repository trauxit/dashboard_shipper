import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Cookies from 'js-cookie';
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const request = await axios.post(`https://server.trauxit.app/api/v1/user/login`, userCredentials);
        const response = await request.data;
        const userName = response.data.userData.userName
        return response;
    }
);

export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (userCredentials) => {
        const request = await axios.post(`https://server.trauxit.app/api/v1/user/signup`, userCredentials);
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
        /* token: localStorage.getItem('token') || '', */
        userName: Cookies.get('userName'),
        token: Cookies.get('token') || '',
    },
    reducers: {
        login(state, action) {
            state.usr = action.payload.data
            state.token = action.payload.token
            state.userName = action.payload.data.userData.userName;
/*             Cookies.set('token', action.payload.token, { expires: 7 });
 */            Cookies.set('userName', action.payload.data.userData.userName);
            localStorage.setItem('token', action.payload.token);
        },
        logout(state) {
            state.usr = null;
            state.token = null;
            localStorage.clear();
            localStorage.removeItem('token');
            Cookies.remove('token'); // Remove the token from cookies
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
                state.userName = action.payload.data.userData.userName;
                localStorage.setItem('user', JSON.stringify(action.payload));
/*                 Cookies.set('token', action.payload.token, { expires: 7 });
 */                localStorage.setItem('token', action.payload.token);
                Cookies.set('userName', action.payload.data.userData.userName);
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
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
export const selectUserName = (state) => state.user.usr?.userName;