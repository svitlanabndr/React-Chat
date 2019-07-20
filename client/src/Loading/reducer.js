import { CHECK_USER_SUCCESS, CLEAR_RESPONSE, CHECK_USER_FAIL } from "./actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case CHECK_USER_SUCCESS: {
            const currentUser = action.payload.data.admin ? action.payload.data.admin : action.payload.data.user;
            return {
                ...state,
                response: action.payload.data,
                currentUser
            };
        }
        case CHECK_USER_FAIL: {
            return {
                ...state,
                checkError: action.payload.error
            };
        }
        case CLEAR_RESPONSE:
            return { };

        default:
            return state;
    }
}