import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_IS_LOADING,  LOAD_USER_PROFILE} from "./getCurrentUser-ActionTypes";

export const getProfile = (token) => ({
    type: GET_USER_PROFILE,
    data: {
        token
    },
  });

export const loadProfileData = (data) => ({
  type: LOAD_USER_PROFILE,
  data
})

export const getProfileError = (data) => ({
    type: GET_USER_PROFILE_ERROR,
    data
  });

export const getProfileLoading = (data) => ({
    type: GET_USER_PROFILE_IS_LOADING,
    data
  });
