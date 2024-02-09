import { GET_USER_TOP_ITEMS, LOAD_USER_TOP_ITEMS, GET_USER_TOP_ITEMS_ERROR, GET_USER_TOP_ITEMS_IS_LOADING } from "./getTopItems-ActionTypes";

const initialState = {
    data: {},
    error: '',
    isLoading: false,
}

const fetchUserTopItems = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_TOP_ITEMS:
            return {
                ...state,
                data: action.data,
            }
        case GET_USER_TOP_ITEMS_ERROR:
            return {
                ...state,
                error: action.data,
            }
        case GET_USER_TOP_ITEMS_IS_LOADING:
            return {
                ...state,
                isLoading: action.data,
            }
        default:
            return state;
    }
}

export default fetchUserTopItems