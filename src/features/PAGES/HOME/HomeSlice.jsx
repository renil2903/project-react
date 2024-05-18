import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeAPI } from "../HOME/HomeAPI";

const initialState = {
    loading: false,
    data: {}
}

export const getAllData = createAsyncThunk("product/getAllData", async () => {
    let response = await HomeAPI();
    if(response && response.status == 200) {
        return response.data
    }
})


const HomeSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
    }
})

export default HomeSlice.reducer