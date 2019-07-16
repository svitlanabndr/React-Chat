import { 
    OPEN_MODAL, 
    UPDATE_EDIT, 
    CLOSE_MODAL 
} from "./actionTypes";

const initialState =  { 
    isModalOpen: false, 
    editValue: '',
    editId: undefined,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            if(action.payload.id && action.payload.message)
                return {
                    ...state,
                    editValue: action.payload.message,
                    isModalOpen: true,
                    editId: action.payload.id
                };
            else {
                const message = action.payload.messageList.slice().reverse().find(obj => obj.is_mine);
                return message ? 
                    {
                        ...state,
                        editValue: message.message,
                        isModalOpen: true,
                        editId: message.id
                    }:
                    state;
            }
        case UPDATE_EDIT:
            return {
                ...state,
                editValue: action.payload.editValue
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                editValue: '',
                editId: undefined
            };
        default:
            return state;
    }
}