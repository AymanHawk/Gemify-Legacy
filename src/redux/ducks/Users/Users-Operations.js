import { watchers as GetUserWatcher } from "./ducks/GetCurrentUserProfile/getCurrentUser-Operations";

const UserSagas = [
    ...GetUserWatcher,
];

export default UserSagas;
