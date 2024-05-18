import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartDataAPI } from "../HOME/HomeAPI";

const initialState = {
    loading: false,
    data: {}
}

export const getAllDataCart = createAsyncThunk("cart/getAllDataCart", async () => {
    let response = await getCartDataAPI();
    if(response && response.status == 200) {
        return response.data
    }
})


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllDataCart.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllDataCart.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
    }
})

export default cartSlice.reducer