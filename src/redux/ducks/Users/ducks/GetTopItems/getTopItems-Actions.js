import { GET_USER_TOP_ITEMS, LOAD_USER_TOP_ITEMS, GET_USER_TOP_ITEMS_ERROR, GET_USER_TOP_ITEMS_IS_LOADING, CLEAR_USER_TOP_ITEMS } from "./getTopItems-ActionTypes";

export const getTopItems = (token, type, time_range, limit, offset) => ({
    type: GET_USER_TOP_ITEMS,
    data: {
        token,
        type,
        time_range,
        limit,
        offset,
    },
});

export const loadTopItems = (data) => ({
    type: LOAD_USER_TOP_ITEMS,
    data,
});

export const getTopItemsError = (data) => ({
    type: GET_USER_TOP_ITEMS_ERROR,
    data,
});

export const getTopItemsIsLoading = (data) => ({
    type: GET_USER_TOP_ITEMS_IS_LOADING,
    data,
});

export const clearTopItems = () => ({
    type: CLEAR_USER_TOP_ITEMS
})