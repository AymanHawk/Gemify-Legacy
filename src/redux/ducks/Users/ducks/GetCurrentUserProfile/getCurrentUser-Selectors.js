// selectors.js
export const selectUserProfile = (state) => state?.user?.getUser?.data
export const selectLoadingStatus = (state) => state?.user?.getUser?.isLoading
export const selectErrorStatus = (state) => state?.user?.getUser?.error