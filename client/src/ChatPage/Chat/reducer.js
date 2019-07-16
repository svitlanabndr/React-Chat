import { 
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAIL,
    ADD_MESSAGE, 
    UPDATE_INPUT, 
    LIKE_MESSAGE, 
    DELETE_MESSAGE, 
    UPDATE_MESSAGE 
} from "./actionTypes";

const initialState =  { 
    messageList: [], 
    isFetching: true, 
    error: null, 
    inputValue: '',
};

export default function (state = initialState, action) {
    let newMessageList = [];
    switch (action.type) {
        
        case FETCH_MESSAGES_SUCCESS:
            return { 
                ...state, 
                messageList: action.payload.messageList, 
                isFetching: action.payload.isFetching 
            }

        case FETCH_MESSAGES_FAIL:
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
        
        case UPDATE_MESSAGE:
            newMessageList = state.messageList.map(obj => {
                if (obj.id === action.payload.id)
                    obj.message = action.payload.newMessage;
                return obj;
            });
            return {
                ...state,
                messageList: newMessageList
            }

        default:
            return state;
    }
}