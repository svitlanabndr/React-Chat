import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { 
    FETCH_MESSAGES
} from "./actionTypes";

export function* fetchMessages() {
	try {
		const messages = yield call(axios.get, 'http://localhost:5000/chat');
		yield put({ type: 'FETCH_MESSAGES_SUCCESS', payload: { messageList: messages.data, isFetching: false } })
	} catch (error) {
        yield put({ type: 'FETCH_MESSAGES_FAIL', payload: { error: error, isFetching: false } })
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