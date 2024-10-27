import { createSlice } from "@reduxjs/toolkit";

export interface DrawerState {
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: state => {
      console.log("toggle");
      state.isOpen = !state.isOpen;
      console.log(state.isOpen);
    },
  },
});

export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
