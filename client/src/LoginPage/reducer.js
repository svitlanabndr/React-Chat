import { 
    UPDATE_LOGIN_VALUE,
    UPDATE_PASSWORD_VALUE
} from "./actionTypes";

const initialState =  { 
    loginValue: '',
    passwordValue: ''
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

        default:
            return state;
    }
}