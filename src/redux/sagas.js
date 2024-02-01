import { all } from "redux-saga/effects";
import UserSagas from "./ducks/Users/Users-Operations";

const allSagas = [
    ...UserSagas,
]

function* rootSaga() {
    yield all(allSagas)
}

export default rootSaga;

