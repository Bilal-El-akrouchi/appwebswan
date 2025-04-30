import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

/* Thunk pour demander "qui suis-je ?" */
export const userThunk = createAsyncThunk("auth/user", async () => {
  const res = await api.get("/user");  // A. appelle le serveur
  return res.data;                     // B. renvoie les infos (id, name…)
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },

  extraReducers: (builder) => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.user = action.payload;     // C. range l’utilisateur dans le coffre
    });
  },
});

export default authSlice.reducer;
