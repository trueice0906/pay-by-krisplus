import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryState {
    categories: any[];
}

const initialState = {
    categories: []
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state: any, action: PayloadAction<any[]>) => {
            state.categories = action.payload;
            return state;
        },
    }
})

export const categoryReducer = categorySlice.reducer;
export default categorySlice