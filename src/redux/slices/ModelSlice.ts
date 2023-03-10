import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: {
      active: false,
      page: "",
      isLoading: false,
      data: { nama: "ilham" },
    },
  },
  reducers: {
    modalSet: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { modalSet } = modalSlice.actions;

export const selectModal = (state:any) => state.modal.data;

export default modalSlice.reducer;
