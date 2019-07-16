import { all } from 'redux-saga/effects';
import chatSagas from '../components/Chat/sagas';

export default function* rootSaga() {
    yield all([
        chatSagas()
    ])
};