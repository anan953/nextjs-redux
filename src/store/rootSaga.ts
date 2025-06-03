import { all } from "redux-saga/effects";
import { githubUserSaga } from "@/features/user-detail/store/githubUserSaga";
import { repositoriesSaga } from "@/features/repositories/store/repositoriesSaga";

export function* rootSaga() {
  yield all([githubUserSaga(), repositoriesSaga()]);
}
