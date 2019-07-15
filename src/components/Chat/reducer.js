import { LOAD_SUCCESS, LOAD_FAIL, ADD_MESSAGE, UPDATE_INPUT } from "./actionTypes";

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

        default:
            return state;
    }
}