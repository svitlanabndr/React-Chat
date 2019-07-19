import { 
    UPDATE_LOGIN_VALUE,
    UPDATE_PASSWORD_VALUE,
    LOGIN_USER_FAIL
} from "./actionTypes";

const initialState =  { 
    loginValue: '',
    passwordValue: '',
    error: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {

        case UPDATE_LOGIN_VALUE:
            return {
                ...state,
                loginValue: action.payload.loginValue
            };

        case UPDATE_PASSWORD_VALUE:
            return {
                ...state,
                passwordValue: action.payload.passwordValue
            };

        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                error: action.payload.error, 
            }

        default:
            return state;
    }
}