import { watchers as GetUserWatcher } from "./ducks/GetCurrentUserProfile/getCurrentUser-Operations";
import { watchers as GetUserTopItemsWatcher } from "./ducks/GetTopItems/getTopItems-Operations";

const UserSagas = [
    ...GetUserWatcher,
    ...GetUserTopItemsWatcher,
];

export default UserSagas;
