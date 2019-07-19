import { 
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAIL, 
    UPDATE_INPUT,
    CLEAR_INPUT,
    CHAT_FAIL
} from "./actionTypes";

const initialState =  { 
    messageList: [],
    isFetching: true, 
    error: null, 
    inputValue: '',
    chatError: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        
        case FETCH_MESSAGES_SUCCESS:
            return { 
                ...state, 
                messageList: action.payload.messageList, 
                isFetching: action.payload.isFetching,
                chatError: null
            }

        case FETCH_MESSAGES_FAIL:
            return { 
                ...state, 
                error: action.payload.error, 
                isFetching: action.payload.isFetching 
            }

        case UPDATE_INPUT:
            return {
                ...state,
                inputValue: action.payload.inputValue
            };

        case CLEAR_INPUT:
            return {
                ...state,
                inputValue: ''
            };

        case CHAT_FAIL:
            return {
                ...state,
                chatError: action.payload.error
            };

        default:
            return state;
    }
}