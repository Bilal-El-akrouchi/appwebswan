import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";   // appel à Axios configuré
               // ← cette ligne déclenche l'erreur si api.js manque

/* Thunk pour demander "qui suis-je ?" */
export const userThunk = createAsyncThunk("auth/user", async () => {
  const res = await api.get("/user");
  return res.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  extraReducers: builder => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});

export default authSlice.reducer;
