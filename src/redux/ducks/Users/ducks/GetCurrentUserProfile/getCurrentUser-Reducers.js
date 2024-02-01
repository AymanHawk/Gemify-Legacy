import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_IS_LOADING, LOAD_USER_PROFILE } from "./getCurrentUser-ActionTypes";

const initialState = {
    data: {},
    error: '',
    isLoading: false,
};

const fetchUserData = (state = initialState, action) => {
    console.log(action.data)
    switch (action.type) {
        // case GET_USER_PROFILE:
        //     console.log(state, '*** REDUCERS')
        //     return {
        //         ...state,
        //         data: action.data,
        //     }
        case LOAD_USER_PROFILE:
            console.log(action, '*** REDUCERS')
            return {
                ...state,
                data: action.data,
            }
        case GET_USER_PROFILE_ERROR:
            return {
                ...state,
                isLoading: action.data,
            }
        case GET_USER_PROFILE_IS_LOADING:
            return {
                ...state,
                error: action.data,
            }
        default:
            return state;
    }
};

export default fetchUserData;
