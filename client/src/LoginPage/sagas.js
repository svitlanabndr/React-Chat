import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { LOGIN_USER } from "./actionTypes";

export function* loginUser(action) {
	const userCreds = { ...action.payload};
	try {
		const { data } = yield call(axios.post, 'http://localhost:5000/login', userCreds);
		if (data.token) {
			localStorage.setItem('jwt', data.token);
			yield put({ type: 'CHECK_USER', payload: {jwt: data.token} })
		}
		// yield put({ type: LOGIN_USER_SUCCESS })
	} catch (error) {
		console.log('error:', error.message);
	}
}

function* watchloginUser() {
	yield takeEvery(LOGIN_USER, loginUser)
}

export default function* loginSagas() {
	yield all([
		watchloginUser()
	])
};