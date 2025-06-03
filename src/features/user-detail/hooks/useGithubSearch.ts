import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUserRequest } from "@/features/user-detail/store/githubUserSlice";
import { RootState } from "@/store";

export const useGithubSearch = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.githubUser
  );

  const searchUser = useCallback(
    (username: string) => {
      if (username.trim()) {
        dispatch(searchUserRequest(username.trim()));
      }
    },
    [dispatch]
  );

  return {
    user,
    loading,
    error,
    searchUser,
  };
};
