import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petApi } from "@app/services/pet";
import { AreaMapByShelter, ShelterMapByArea } from "@app/utils/constants";

export interface PetState {
  data: PetDataType[];
  tmpFilter: PetFilterType;
  filter: PetFilterType;
}

const initialState: PetState = {
  data: [],
  tmpFilter: { page: 1 },
  filter: { page: 1 },
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
      action: PayloadAction<{
        field: keyof PetFilterType;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state.tmpFilter = { ...state.tmpFilter, [field]: value };
    },
    updateArea: (
      state,
      action: PayloadAction<{
        field: keyof PetFilterType;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;

      if (field === "area") {
        state.tmpFilter.shelter = ShelterMapByArea[value];
      }
      state.tmpFilter = { ...state.tmpFilter, [field]: value };
    },
    updateShelter: (
      state,
      action: PayloadAction<{
        field: keyof PetFilterType;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      if (field === "shelter") {
        state.tmpFilter.area = AreaMapByShelter[value];
      }
      state.tmpFilter = { ...state.tmpFilter, [field]: value };
    },
    queryPet: (state, action: PayloadAction<PetFilterType>) => {
      state.tmpFilter = action.payload;
      state.filter = action.payload;
    },
    resetTmpFilter: state => {
      state.tmpFilter = initialState.tmpFilter;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      petApi.endpoints.getPetByFilter.matchFulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );
  },
});

export const {
  initPetFilter,
  updateTmpFilterByField,
  updateArea,
  updateShelter,
  queryPet,
  resetTmpFilter,
} = petSlice.actions;

export default petSlice.reducer;
export const setPetData = petSlice.actions;
