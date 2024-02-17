import { call, fork, put, takeLeading } from 'redux-saga/effects';
import { getTopItems, loadTopItems, getTopItemsError, getTopItemsIsLoading } from './getTopItems-Actions';
import { apiHub } from '../../../../../apis';

function* workerGetTopItems(action){
    yield put(getTopItemsError(''))
    yield put(getTopItemsIsLoading(true))

    try {
        const { token, type, time_range, limit, offset } = action.data
        const response = yield call(apiHub.getUserTopItems, {
            token,
            type,
            time_range,
            limit,
            offset,
        })
        yield put(loadTopItems(response.data))
    } catch (ex) {
        let errorMessage = ex?.response?.data?.errorMessage || '';
        errorMessage = 'error';
        yield put(getTopItemsError(errorMessage));
        console.log(ex);
    }
    yield put(getTopItemsIsLoading(false));
}

function* watcherGetTopItems(){
    yield takeLeading(getTopItems().type, workerGetTopItems)
}

export const watchers = [
    fork(watcherGetTopItems),
]