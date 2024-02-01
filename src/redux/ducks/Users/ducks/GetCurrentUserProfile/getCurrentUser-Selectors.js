// selectors.js
export const selectUserProfile = (state) => state?.user?.getUser?.data
export const selectLoadingStatus = (state) => state
export const selectErrorStatus = (state) => state