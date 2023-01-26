import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./slices/ModelSlice";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
});
