import * as GetUserActions from "./ducks/GetCurrentUserProfile/getCurrentUser-Actions";
import * as GetUserActionTypes from "./ducks/GetCurrentUserProfile/getCurrentUser-ActionTypes";
import * as UserOperations from "./ducks/GetCurrentUserProfile/getCurrentUser-Operations";
import UserReducers from "./Users-Reducers";

const UserWatcherSagas= [
    ...UserOperations.watchers,
]

export {
    GetUserActions,
    GetUserActionTypes,
    UserOperations,
    UserWatcherSagas
}

export default UserReducers