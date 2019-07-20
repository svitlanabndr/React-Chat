import { all } from 'redux-saga/effects';
import chatSagas from '../ChatPage/Chat/sagas';
import editModalSagas from '../ChatPage/EditModal/sagas';
import loginSagas from '../LoginPage/sagas';
import userPageSagas from '../userPage/sagas';
import usersSagas from '../users/sagas';
import loadingSagas from '../Loading/sagas';

export default function* rootSaga() {
    yield all([
        chatSagas(),
        loginSagas(),
        userPageSagas(),
        usersSagas(),
        loadingSagas(),
        editModalSagas()
    ])
};