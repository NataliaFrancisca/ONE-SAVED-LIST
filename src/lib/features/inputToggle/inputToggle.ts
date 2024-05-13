import { createSlice } from "@reduxjs/toolkit";

export interface IInputToggle{
  value: boolean
}

const initialState : IInputToggle = {
  value: false
}

export const inputToggle = createSlice({
  name: "input_toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  }
})
 
export const { toggle } = inputToggle.actions;
export default inputToggle.reducer;
