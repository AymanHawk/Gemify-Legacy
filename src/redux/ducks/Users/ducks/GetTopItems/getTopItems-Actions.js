import { GET_USER_TOP_ITEMS, LOAD_USER_TOP_ITEMS, GET_USER_TOP_ITEMS_ERROR, GET_USER_TOP_ITEMS_IS_LOADING } from "./getTopItems-ActionTypes";

export const getTopItems = (token) => ({
    type: GET_USER_TOP_ITEMS,
    data: {
        token
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
