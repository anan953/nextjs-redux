import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GitHubUser } from '@/features/user-detail/types';

interface GitHubUserState {
  user: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: GitHubUserState = {
  user: null,
  loading: false,
  error: null,
};

const githubUserSlice = createSlice({
  name: 'githubUser',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchUserRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    searchUserSuccess: (state, action: PayloadAction<GitHubUser>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    searchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});

export const { searchUserRequest, searchUserSuccess, searchUserFailure } = githubUserSlice.actions;

export default githubUserSlice.reducer;
