import { OPEN_MODAL, UPDATE_EDIT, CLOSE_MODAL } from "./actionTypes";

const initialState =  { 
    isModalOpen: false, 
    editValue: '',
    editId: undefined,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                editValue: action.payload.message,
                isModalOpen: true,
                editId: action.payload.id
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