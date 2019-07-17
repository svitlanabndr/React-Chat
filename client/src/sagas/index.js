import { all } from 'redux-saga/effects';
import chatSagas from '../ChatPage/Chat/sagas';
import loginSagas from '../LoginPage/sagas';
import userPageSagas from '../userPage/sagas';
import usersSagas from '../users/sagas';

export default function* rootSaga() {
    yield all([
        chatSagas(),
        loginSagas(),
        userPageSagas(),
        usersSagas()
    ])
};