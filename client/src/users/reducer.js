import { FETCH_USERS_SUCCESS, USERS_FAIL } from "./actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCESS: {
            return {
                ...state,
                users: [...action.payload.users],
                usersError: null
            };
        }

        case USERS_FAIL: {
            return {
                ...state,
                usersError: action.payload.error
            };
        }

        default:
            return state;
    }
}