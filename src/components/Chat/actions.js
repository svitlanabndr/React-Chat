import { 
    LOAD_SUCCESS, 
    LOAD_FAIL, 
    ADD_MESSAGE, 
    UPDATE_INPUT, 
    LIKE_MESSAGE, 
    DELETE_MESSAGE, 
    UPDATE_MESSAGE 
} from "./actionTypes";

import { getFormattedDate, getId } from './service';

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

export const addMessage = () => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage: {
            id:  getId(),
            user: "Sveta",
            avatar: "https://i.pravatar.cc/300?img=14",
            created_at:  getFormattedDate(),
            is_liked: false,
            marked_read: false
        } 
    }
});

export const updateInput = inputValue => ({
    type: UPDATE_INPUT,
    payload: { inputValue }
});

export const likeMessage = id => ({
    type: LIKE_MESSAGE,
    payload: { id }
});

export const deleteMessage = id => ({
    type: DELETE_MESSAGE,
    payload: { id }
});

export const updateMessage = (id, newMessage) => ({
    type: UPDATE_MESSAGE,
    payload: {
        id,
        newMessage
    }
});
