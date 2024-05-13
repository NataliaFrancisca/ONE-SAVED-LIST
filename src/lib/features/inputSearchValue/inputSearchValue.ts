import { createSlice } from "@reduxjs/toolkit";

export interface IInputSearchValue{
  value: string
}

const initialState: IInputSearchValue = {
  value: ''
}

export const inputSearchValue = createSlice({
  name: 'input-search-value',
  initialState,
  reducers: {
    updateInputSearchValue: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { updateInputSearchValue } = inputSearchValue.actions;
export default inputSearchValue.reducer;