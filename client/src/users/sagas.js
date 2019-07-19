import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { ADD_USER, UPDATE_USER, DELETE_USER, FETCH_USERS, FETCH_USERS_SUCCESS, USERS_FAIL } from "./actionTypes";

export function* fetchUsers() {
	try {
		const response = yield call(axios.get, 'http://localhost:5000/users');
		yield put({ type: FETCH_USERS_SUCCESS, payload: { users: response.data } })
	} catch (error) {
		yield put({ type: USERS_FAIL, payload: { error } })
	}
}

function* watchFetchUsers() {
	yield takeEvery(FETCH_USERS, fetchUsers)
}

export function* addUser(action) {
	const newUser = { ...action.payload.data, id: action.payload.id };

	try {
		yield call(axios.post, 'http://localhost:5000/users', newUser);
		yield put({ type: FETCH_USERS });
	} catch (error) {
		yield put({ type: USERS_FAIL, payload: { error } })
	}
}

function* watchAddUser() {
	yield takeEvery(ADD_USER, addUser)
}

export function* updateUser(action) {
	const id = action.payload.id;
	const updatedUser = { ...action.payload.data };
	
	try {
		yield call(axios.put, `http://localhost:5000/users/${id}`, updatedUser);
		yield put({ type: FETCH_USERS });
	} catch (error) {
		yield put({ type: USERS_FAIL, payload: { error } })
	}
}

function* watchUpdateUser() {
	yield takeEvery(UPDATE_USER, updateUser)
}

export function* deleteUser(action) {
	console.log(`http://localhost:5000/users/${action.payload.id}`);
	try {
		yield call(axios.delete, `http://localhost:5000/users/${action.payload.id}`);
		yield put({ type: FETCH_USERS });
	} catch (error) {
		yield put({ type: USERS_FAIL, payload: { error } })
	}
}

function* watchDeleteUser() {
	yield takeEvery(DELETE_USER, deleteUser)
}

export default function* usersSagas() {
	yield all([
		watchFetchUsers(),
		watchAddUser(),
		watchUpdateUser(),
		watchDeleteUser()
	])
};