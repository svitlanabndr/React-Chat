import { CHECK_USER } from "./actionTypes";

export const checkUser = (jwt) => ({
    type: CHECK_USER,
    payload: { jwt }
});