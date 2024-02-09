import * as GetUserActions from "./ducks/GetCurrentUserProfile/getCurrentUser-Actions";
import * as GetUserActionTypes from "./ducks/GetCurrentUserProfile/getCurrentUser-ActionTypes";
import * as UserOperations from "./ducks/GetCurrentUserProfile/getCurrentUser-Operations";

import * as GetTopItemsActions from "./ducks/GetTopItems/getTopItems-Actions";
import * as GetTopItemsActionTypes from "./ducks/GetTopItems/getTopItems-ActionTypes";
import * as TopItemOperations from "./ducks/GetTopItems/getTopItems-Operations";

import UserReducers from "./Users-Reducers";

const UserWatcherSagas = [
    ...UserOperations.watchers,
    ...TopItemOperations.watchers,
]

export {
    GetUserActions,
    GetUserActionTypes,
    UserOperations,

    GetTopItemsActions,
    GetTopItemsActionTypes,
    TopItemOperations,

    UserWatcherSagas
}

export default UserReducers