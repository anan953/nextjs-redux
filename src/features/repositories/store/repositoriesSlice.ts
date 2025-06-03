import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repository } from '@/features/repositories/types';

interface RepositoriesState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoriesState = {
  repositories: [],
  loading: false,
  error: null,
};

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchRepositoriesRequest: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.repositories = [];
    },
    fetchRepositoriesSuccess: (state, action: PayloadAction<Repository[]>) => {
      state.loading = false;
      state.repositories = action.payload;
      state.error = null;
    },
    fetchRepositoriesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRepositoriesRequest, fetchRepositoriesSuccess, fetchRepositoriesFailure } =
  repositoriesSlice.actions;

export default repositoriesSlice.reducer;
