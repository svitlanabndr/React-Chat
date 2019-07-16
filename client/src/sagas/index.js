import { all } from 'redux-saga/effects';
import chatSagas from '../ChatPage/Chat/sagas';
import loginSagas from '../LoginPage/sagas';

export default function* rootSaga() {
    yield all([
        chatSagas(),
        loginSagas()
    ])
};