import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PetState {
  data: PetDataType[];
  filter: PetFilterType;
}

const initialState: PetState = {
  data: [],
  filter: {},
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    initPetFilter: state => {
      state.filter = initialState.filter;
    },
    queryPet: (state, action: PayloadAction<PetFilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { initPetFilter, queryPet } = petSlice.actions;

export default petSlice.reducer;
