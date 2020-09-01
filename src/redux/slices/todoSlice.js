import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            key: nanoid(),
            value: value,
          },
        };
      },
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
