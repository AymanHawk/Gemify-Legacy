import { call, fork, put, takeLeading } from 'redux-saga/effects';
import { getProfile, getProfileError, getProfileLoading, loadProfileData } from './getCurrentUser-Actions';
import { apiHub } from '../../../../../apis';

function* workerGetProfile(action) {
    console.log('operations reached')
    yield put(getProfileError(''));
    yield put(getProfileLoading(true));


    try {
            const { token } = action.data

            console.log('reached before')
            const response = yield call(apiHub.getCurrentUserProfile, {
                token
            });
            console.log(response)
            yield put(loadProfileData(response.data));
            console.log('reached after')
    } catch (ex) {
        let errorMessage = ex?.response?.data?.errorMessage || 'Failed to get greeting card';
        errorMessage = 'keyId ? `${keyId} - ${errorMessage}` : errorMessage';
        yield put(getProfileError(errorMessage));
        console.log(ex);
    }

    yield put(getProfileLoading(false));
}

function* watcherGetProfile() {
    yield takeLeading(getProfile().type, workerGetProfile);
    console.log('operationz')
}

export const watchers = [
    fork(watcherGetProfile),
];