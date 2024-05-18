import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoginDataAPI } from "../../../features/PAGES/HOME/HomeAPI";

const initialState = {
    loading: false,
    token: {}
}

export const getLoginData = createAsyncThunk('login/getLoginData', async(values) => {
    let res = await getLoginDataAPI(values)
    if(res && res?.data){
        localStorage.setItem('token',res?.data?.token)
        localStorage.setItem('UserAllData',JSON.stringify(res?.data))
        return res.data
    }
})

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLoginData.pending, (state) => {
            state.loading = true
        }).addCase(getLoginData.fulfilled,(state,action) => {
            state.token = action.payload
            state.loading = false
        })
    }
})

export default LoginSlice.reducer