import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { value: ['Today', 'Work', 'Shopping']},
    reducers: {
        addCategory: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
});

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;