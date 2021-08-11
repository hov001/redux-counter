import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    step: 1,
    min: 0,
    max: 10
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value < state.max) {
                state.value += state.step
            }
        },
        decrement: (state) => {
            if (state.value > state.min) {
                state.value -= state.step;
            }
        },

        calculate: (state, action) => {
            const {key, value} = action.payload

            state[key] = value
        }
    },
});

export const {increment, decrement, calculate} = counterSlice.actions;

export default counterSlice.reducer