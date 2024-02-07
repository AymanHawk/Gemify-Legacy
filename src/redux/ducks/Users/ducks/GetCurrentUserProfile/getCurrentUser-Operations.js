import { call, fork, put, takeLeading } from 'redux-saga/effects';
import { getProfile, getProfileError, getProfileLoading, loadProfileData } from './getCurrentUser-Actions';
import { apiHub } from '../../../../../apis';

function* workerGetProfile(action) {
    yield put(getProfileError('k'));
    yield put(getProfileLoading(true));

    try {
            const { token } = action.data

            const response = yield call(apiHub.getCurrentUserProfile, {
                token
            });
            yield put(loadProfileData(response.data));
    } catch (ex) {
        let errorMessage = ex?.response?.data?.errorMessage || '';
        errorMessage = 'error';
        yield put(getProfileError(errorMessage));
        console.log(ex);
    }
    // console.log('reached loading')
    yield put(getProfileLoading(false));
}

function* watcherGetProfile() {
    yield takeLeading(getProfile().type, workerGetProfile);
}

export const watchers = [
    fork(watcherGetProfile),
];