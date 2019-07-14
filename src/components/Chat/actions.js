import { LOAD_SUCCESS, LOAD_FAIL, ADD_MESSAGE } from "./actionTypes";

export const loadSuccess = (messageList) => ({
    type: LOAD_SUCCESS,
    payload: {
        messageList: messageList.map(obj => {
                obj.is_liked = false;
                return obj;
            }), 
        isFetching: false 
    }
});

export const loadFail = (error) => ({
    type: LOAD_FAIL,
    payload: {
        error,
        isFetching: false
    }

});

export const addMessage = (text) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage: {} 
    }
});