import { CHECK_USER, CLEAR_RESPONSE } from "./actionTypes";

export const checkUser = (jwt) => ({
    type: CHECK_USER,
    payload: { jwt }
});

export const clearResponse = id => ({
    type: CLEAR_RESPONSE
});
