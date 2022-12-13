import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Features/TodoSlice";
import UiReducer from "./Features/UiToggleSlice";

const store = configureStore({
  reducer: {
    crudTodo: todoReducer,
    ui: UiReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export default store;
