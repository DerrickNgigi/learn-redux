import { createSlice } from "@reduxjs/toolkit";

const initialState = "red"

export const themesSlice = createSlice({
    name: "theme",
    initialState: { value: initialState },

    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeTheme } = themesSlice.actions;
export default themesSlice.reducer;