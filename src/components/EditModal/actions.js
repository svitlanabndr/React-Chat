import { 
    OPEN_MODAL, 
    UPDATE_EDIT, 
    CLOSE_MODAL 
} from "./actionTypes";

export const openModal = (id, message) => ({
    type: OPEN_MODAL,
    payload: {
        id,
        message
    }
});

export const updateEdit = editValue => ({
    type: UPDATE_EDIT,
    payload: { editValue }
});

export const closeModal = () => ({
    type: CLOSE_MODAL
})