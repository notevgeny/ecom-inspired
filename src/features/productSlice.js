import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../const";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async(id) => {
        const response = await fetch(`${GOODS_URL}/${id}`);
        return await response.json();
    }
)


export const fetchSimilarProducts = createAsyncThunk(
    'product/fetchSimilarProducts',
    async(gender, category, top) => {
        const url = new URL(GOODS_URL);
        url.searchParams.append('gender', gender);
        url.searchParams.append('category', category);
        url.searchParams.append('top', top);
        const response = await fetch(url);
        console.log(response)
        return await response.json();
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        status: 'idle',
        error: null,
        product: {},
        similarProducts: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'successed';
                state.product = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(fetchSimilarProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
                state.status = 'successed';
                state.similarProducts = action.payload;
            })
            .addCase(fetchSimilarProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default productSlice.reducer;