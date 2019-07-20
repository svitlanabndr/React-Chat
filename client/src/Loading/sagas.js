import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { CHECK_USER, CHECK_USER_FAIL, CHECK_USER_SUCCESS } from "./actionTypes";

export function* checkUser(action) {
	try {
		const { data } = yield call(axios.post, 'http://localhost:5000/', { jwt: action.payload.jwt });
		yield put({ type: CHECK_USER_SUCCESS, payload: { data } })
	} catch (error) {
		yield put({ type: CHECK_USER_FAIL, payload: { error } })
	}
}

function* watchCheckUser() {
    yield takeEvery(CHECK_USER, checkUser)
}

export default function* loadingSagas() {
    yield all([
        watchCheckUser()
    ])
};