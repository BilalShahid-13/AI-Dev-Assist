import { createSlice } from "@reduxjs/toolkit";

const extensionSlice = createSlice({
  name: "name",
  initialState: {
    name: "",
    id: 0,
    content: "",
    extension: "",
  },
  reducers: {
    setName: (state, action) => {
      // Update both `name` and `id` from the payload
      const { name, id, content, extension } = action.payload;
      state.name = name;
      state.id = id;
      state.content = content;
      state.extension = extension;
    },
  },
});

export const { setName } = extensionSlice.actions;

export default extensionSlice.reducer;
