import {
    combineReducers,
} from 'redux';

import UserReducers from './ducks/Users';

const reducer = combineReducers({
    user: UserReducers,
})

export default reducer
