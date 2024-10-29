import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PetState {
  data: PetDataType[];
  tmpFilter: PetFilterType;
  filter: PetFilterType;
}

const initialState: PetState = {
  data: [],
  tmpFilter: {},
  filter: {},
};

export const petSlice = createSlice({
  name: "pet",
  initialState,
  reducers: {
    initPetFilter: state => {
      state.filter = initialState.filter;
    },
    updateTmpFilterByField: (
      state,
      action: PayloadAction<{ field: keyof PetFilterType; value: string }>
    ) => {
      console.log(action.payload);
      const { field, value } = action.payload;
      state.tmpFilter = { ...state.tmpFilter, [field]: value };
      console.log(state.tmpFilter);
    },
    queryPet: (state, action: PayloadAction<PetFilterType>) => {
      state.tmpFilter = action.payload;
      state.filter = action.payload;
    },
  },
});

export const { initPetFilter, updateTmpFilterByField, queryPet } =
  petSlice.actions;

export default petSlice.reducer;
