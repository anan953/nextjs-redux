import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchRepositoriesRequest,
  fetchRepositoriesSuccess,
  fetchRepositoriesFailure,
} from './repositoriesSlice';
import { githubApi } from '@/services/github/api';

function* handleFetchRepositories(action: ReturnType<typeof fetchRepositoriesRequest>): Generator {
  try {
    const repositories = yield call(githubApi.getUserRepos, action.payload);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(
      fetchRepositoriesFailure(error instanceof Error ? error.message : 'An error occurred')
    );
  }
}

export function* repositoriesSaga(): Generator {
  yield takeLatest(fetchRepositoriesRequest.type, handleFetchRepositories);
}
