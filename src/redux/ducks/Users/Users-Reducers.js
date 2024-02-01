import { combineReducers } from 'redux';

import ProfileReducer from './ducks/GetCurrentUserProfile/getCurrentUser-Reducers';

const usersReducers = combineReducers({
    getUser: ProfileReducer,
})

export default usersReducers;