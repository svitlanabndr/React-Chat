import { CHECK_USER_SUCCESS } from "./actionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case CHECK_USER_SUCCESS: {
            return {
                ...state,
                response: action.payload.data
            };
        }

        default:
            return state;
    }
}