import { combineReducers } from "@reduxjs/toolkit";
import githubUserReducer from "@/features/user-detail/store/githubUserSlice";
import repositoriesReducer from "@/features/repositories/store/repositoriesSlice";

const rootReducer = combineReducers({
  githubUser: githubUserReducer,
  repositories: repositoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
