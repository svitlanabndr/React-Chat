import { 
    FETCH_MESSAGES,
    ADD_MESSAGE, 
    UPDATE_INPUT, 
    LIKE_MESSAGE, 
    DELETE_MESSAGE,
    CLEAR_RESPONSE
} from "./actionTypes";

import { getFormattedDate, getId } from './service';

export const fetchMessages = () => ({
    type: FETCH_MESSAGES
});

export const addMessage = (user, text) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage: {
            id:  getId(),
            user: user.id,
            avatar: user.avatar,
            message: text,
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
