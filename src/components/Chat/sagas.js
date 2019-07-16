import axios from 'axios';
// import api from '../shared/config/api';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { 
    FETCH_MESSAGES
} from "./actionTypes";

export function* fetchMessages() {
	try {
		const messages = yield call(axios.get, `https://api.myjson.com/bins/1hiqin`);
		yield put({ type: 'FETCH_MESSAGES_SUCCESS', payload: { messageList: messages.data, isFetching: false } })
	} catch (error) {
        yield put({ type: 'FETCH_MESSAGES_FAIL', payload: { error: error.message, isFetching: false } })
	}
}

function* watchFetchMessages() {
	yield takeEvery(FETCH_MESSAGES, fetchMessages)
}

export default function* chatSagas() {
	yield all([
		watchFetchMessages()
	])
};