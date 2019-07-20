import { 
    OPEN_MODAL,
    OPEN_MODAL_ARROW, 
    UPDATE_EDIT, 
    CLOSE_MODAL, 
    FETCH_MESSAGE_SUCCESS,
    EDIT_MODAL_FAIL
} from "./actionTypes";

const initialState =  { 
    isModalOpen: false, 
    editValue: undefined,
    editId: undefined,
    editError: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
                editId: action.payload.id,
                editError: null
            };

        case OPEN_MODAL_ARROW:
            const message = action.payload.list.slice().reverse().find(obj => obj.user === action.payload.user.id);
                return message ? 
                    {
                        ...state,
                        isModalOpen: true,
                        editId: message.id
                    }:
                    state;

        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                editValue: action.payload.message,
                editError: null
            };

        case UPDATE_EDIT:
            return {
                ...state,
                editValue: action.payload.editValue
            };

        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                editValue: undefined,
                editId: undefined
            };
        
        case EDIT_MODAL_FAIL:
            return {
                ...state,
                editError: action.payload.error
            }

        default:
            return state;
    }
}