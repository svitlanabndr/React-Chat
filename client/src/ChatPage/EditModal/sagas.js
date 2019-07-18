import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_MESSAGE, UPDATE_MESSAGE } from "./actionTypes";

export function* fetchMessage(action) {
	try {
		const res = yield call(axios.get, `http://localhost:5000/chat/${action.payload.id}`);
		yield put({ type: 'FETCH_MESSAGE_SUCCESS', payload: { message: res.data.message } });
	} catch (error) {
        console.log('fetchMessage error:', error);
	}
}

function* watchFetchMessage() {
	yield takeEvery(FETCH_MESSAGE, fetchMessage)
}

export function* updateMessage(action) {
	try {
		yield call(axios.post, `http://localhost:5000/chat/${action.payload.id}`, { value: action.payload.value });
		yield put({ type: 'FETCH_MESSAGES' });
	} catch (error) {
        console.log('fetchMessage error:', error);
	}
}

function* watchUpdateMessage() {
	yield takeEvery(UPDATE_MESSAGE, updateMessage)
}

export default function* editModalSagas() {
	yield all([
		watchFetchMessage(),
		watchUpdateMessage()
	])
};