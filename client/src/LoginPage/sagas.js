import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { 
    LOGIN_USER
} from "./actionTypes";


export function* loginUser(action) {
	const userCreds = { ...action.payload};
	try {
		yield call(axios.post, 'http://localhost:5000/login', userCreds);
	} catch (error) {
		console.log('error:', error.message);
	}
}

function* watchAddUser() {
	yield takeEvery(LOGIN_USER, loginUser)
}

export default function* loginSagas() {
	yield all([
		watchAddUser()
	])
};