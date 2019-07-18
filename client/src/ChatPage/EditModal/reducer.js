import { 
    OPEN_MODAL,
    OPEN_MODAL_ARROW, 
    UPDATE_EDIT, 
    CLOSE_MODAL, 
    FETCH_MESSAGE_SUCCESS
} from "./actionTypes";

const initialState =  { 
    isModalOpen: false, 
    editValue: undefined,
    editId: undefined,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
                editId: action.payload.id
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
                editValue: action.payload.message
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

        default:
            return state;
    }
}