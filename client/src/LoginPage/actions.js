import { 
    UPDATE_LOGIN_VALUE,
    UPDATE_PASSWORD_VALUE,
    LOGIN_USER
} from "./actionTypes";

export const updateLoginValue = loginValue => ({
    type: UPDATE_LOGIN_VALUE,
    payload: { loginValue }
});

export const updatePasswordValue = passwordValue => ({
    type: UPDATE_PASSWORD_VALUE,
    payload: { passwordValue }
});

export const loginUser = (login, password) => ({
    type: LOGIN_USER,
    payload: {
        login, password
    }
});