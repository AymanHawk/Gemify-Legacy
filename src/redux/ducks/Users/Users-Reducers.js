import { combineReducers } from 'redux';

import ProfileReducer from './ducks/GetCurrentUserProfile/getCurrentUser-Reducers';
import TopItemsReducer from './ducks/GetTopItems/getTopItems-Reducers';

const usersReducers = combineReducers({
    getUser: ProfileReducer,
    getTopItems: TopItemsReducer,
})

export default usersReducers;