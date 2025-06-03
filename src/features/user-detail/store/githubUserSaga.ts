import { takeLatest, put, call } from "redux-saga/effects";
import {
  searchUserRequest,
  searchUserSuccess,
  searchUserFailure,
} from "./githubUserSlice";
import { githubApi } from "@/services/github/api";

function* handleSearchUser(
  action: ReturnType<typeof searchUserRequest>
): Generator {
  try {
    const user = yield call(githubApi.getUser, action.payload);
    yield put(searchUserSuccess(user));
  } catch (error) {
    yield put(
      searchUserFailure(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

export function* githubUserSaga(): Generator {
  yield takeLatest(searchUserRequest.type, handleSearchUser);
}
