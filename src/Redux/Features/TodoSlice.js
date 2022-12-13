import { createSlice } from "@reduxjs/toolkit";

const LIMIT = 50;

const initialState = {
  pendingTask: [],
  completedTask: [],
  deletingIds: [],
  emailuuid: "",
  CTL: 0,
  PTL: 0,
  limit: LIMIT,
};

const Todos = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addPreference: (state, action) => {
      state.emailuuid = action.payload;
    },
    addTodo: (state, action) => {
      const data = action.payload;
      data.filter((x) => {
        if (x.status) state.completedTask.unshift(x);
        else state.pendingTask.unshift(x);
      });
      state.CTL = state.completedTask.length;
      state.PTL = state.pendingTask.length;
      state.limit = LIMIT - (state.CTL + state.PTL);
    },
    updateStatus: (state, action) => {
      state.pendingTask.filter((item, i) => {
        if (item._id === action.payload._id) {
          item = action.payload;
          state.completedTask.unshift(item);
          state.pendingTask.splice(i, 1);
        }
      });
      state.CTL = state.completedTask.length;
      state.PTL = state.pendingTask.length;
    },
    updateTitle: (state, action) => {
      const { id, newTitle } = action.payload;
      state.pendingTask.map((item) =>
        item._id === id ? (item.title = newTitle) : null
      );
    },
    clearTodo: (state) => {
      state.pendingTask.splice(0, state.pendingTask.length);
      state.completedTask.splice(0, state.completedTask.length);
      state.CTL = state.completedTask.length;
      state.PTL = state.pendingTask.length;
      state.limit = LIMIT - (state.CTL + state.PTL);
    },
    deleteTodo: (state) => {
      const ids = state.deletingIds;
      state.pendingTask = state.pendingTask.filter(
        (item) => !ids.includes(item._id)
      );
      state.deletingIds = [];
      state.PTL = state.pendingTask.length;
      state.limit = LIMIT - (state.CTL + state.PTL);
    },
    toDelete: (state, action) => {
      state.deletingIds.push(action.payload);
    },
    notToDelete: (state, action) => {
      state.deletingIds.splice(state.deletingIds.indexOf(action.payload), 1);
    },
  },
});

export default Todos.reducer;
export const {
  addPreference,
  addTodo,
  updateStatus,
  updateTitle,
  clearTodo,
  deleteTodo,
  toDelete,
  notToDelete,
} = Todos.actions;
