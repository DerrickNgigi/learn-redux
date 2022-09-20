import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", age: 0, email: "" }

export const usersSlice = createSlice({
    name: "user",
    initialState: { value: initialState },

    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },


        logout: (state) => {
            state.value = initialState;
        }
    }
})

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;