import { LOAD_SUCCESS, LOAD_FAIL, ADD_MESSAGE } from "./actionTypes";

const initialState =  { 
    messageList: [], 
    isFetching: true, 
    error: null, 
    isModalOpen: false, 
    editValue: undefined,
    editId: undefined
 };

export default function (state = initialState, action) {
    console.log('reducer')
    switch (action.type) {
        case LOAD_SUCCESS:
            const { messageList } = action.payload;
            state.messageList = messageList;
            return state;
            
        case LOAD_FAIL:
            const { error, isFetching } = action.payload;
            state.error = error;
            state.isFetching = isFetching;
            return state;

        case ADD_MESSAGE:
            const { newMessage } = action.payload;
            state.messageList.push(newMessage);
            return state;
            
        default:
            return state;
    }
}