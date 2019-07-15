import { LOAD_SUCCESS, LOAD_FAIL, ADD_MESSAGE, UPDATE_INPUT, LIKE_MESSAGE, DELETE_MESSAGE } from "./actionTypes";
import { stat } from "fs";

const initialState =  { 
    messageList: [], 
    isFetching: true, 
    error: null, 
    isModalOpen: false, 
    editValue: undefined,
    editId: undefined,
    inputValue: ''
 };

export default function (state = initialState, action) {
    let newMessageList = [];
    switch (action.type) {
        case LOAD_SUCCESS:
            return { 
                ...state, 
                messageList: action.payload.messageList, 
                isFetching: action.payload.isFetching 
            }

        case LOAD_FAIL:
            return { 
                ...state, 
                error: action.payload.error, 
                isFetching: action.payload.isFetching 
            }
        
        case ADD_MESSAGE:
            const { newMessage } = action.payload;
            newMessage.message = state.inputValue;
            return {
                ...state,
                messageList: [...state.messageList, newMessage],
                inputValue: ''
            };

        case UPDATE_INPUT:
            return {
                ...state,
                inputValue: action.payload.inputValue
            };

        case LIKE_MESSAGE:
            newMessageList = state.messageList.map(obj => {
                if(obj.id === action.payload.id)
                    obj.is_liked = !obj.is_liked;
                return obj;
            });
            return {
                ...state,
                messageList: newMessageList
            }

        case DELETE_MESSAGE:
            newMessageList = state.messageList.filter(obj => obj.id !== action.payload.id);
            return {
                ...state,
                messageList: newMessageList
            }

        default:
            return state;
    }
}