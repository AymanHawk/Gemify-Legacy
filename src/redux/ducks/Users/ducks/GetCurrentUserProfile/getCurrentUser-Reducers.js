import { CLEAR_USER_PROFILE_IS_LOADING, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_IS_LOADING, LOAD_USER_PROFILE } from "./getCurrentUser-ActionTypes";

const initialState = {
    data: {},
    error: '',
    isLoading: false,
};

const fetchUserData = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_PROFILE:
            return {
                ...state,
                data: action.data,
            }
        case GET_USER_PROFILE_ERROR:
            return {
                ...state,
                error: action.data,
            }
        case GET_USER_PROFILE_IS_LOADING:
            return {
                ...state,
                isLoading: action.data,
            }
        case CLEAR_USER_PROFILE_IS_LOADING: 
            return initialState
        default:
            return state;
    }
};

export default fetchUserData;
