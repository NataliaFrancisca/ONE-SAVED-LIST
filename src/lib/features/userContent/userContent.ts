import { type IFormContent } from "@/ts/interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserContent{
  value: IFormContent[]
}

const initialState: IUserContent = {
  value: []
}

export const userContent = createSlice({
  name: 'input-search-value',
  initialState,
  reducers: {
    updateUserContent: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { updateUserContent } = userContent.actions;
export default userContent.reducer;