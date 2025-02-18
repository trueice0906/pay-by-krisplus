import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the User state interface
export interface UserState {
  user: any | null;  // User data (can be null if no user is logged in)
  isAuthenticated: boolean;  // Track if the user is authenticated
  error: string | null;  // For error messages (e.g., authentication failures)
}

// Define the initial state
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

// User slice to handle authentication and user data
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Set user data after successful login
    loginUser: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },

    // Logout the user (clear user data and reset authentication state)
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },

    // Set an error message (e.g., failed login)
    setUserError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Export the reducer from the slice
export const { loginUser, logoutUser, setUserError } = userSlice.actions;
export const userReducer = userSlice.reducer;

export default userSlice;