import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositoriesRequest } from "@/features/repositories/store/repositoriesSlice";
import { RootState } from "@/store";

export const useRepositories = (username: string) => {
  const dispatch = useDispatch();
  const { repositories, loading, error } = useSelector(
    (state: RootState) => state.repositories
  );

  useEffect(() => {
    if (username) {
      dispatch(fetchRepositoriesRequest(username));
    }
  }, [dispatch, username]);

  return {
    repositories,
    loading,
    error,
  };
};
