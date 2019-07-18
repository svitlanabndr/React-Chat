import { 
    OPEN_MODAL, 
    UPDATE_EDIT, 
    CLOSE_MODAL, 
    OPEN_MODAL_ARROW,
    FETCH_MESSAGE,
    UPDATE_MESSAGE
} from "./actionTypes";

export const openModal = (id) => ({
    type: OPEN_MODAL,
    payload: { id }
});

export const openModalArrow = (list, user) => ({
    type: OPEN_MODAL_ARROW,
    payload: { 
        list,
        user
     }
});

export const fetchMessage = id => ({
    type: FETCH_MESSAGE,
    payload: { id }
});

export const updateEdit = editValue => ({
    type: UPDATE_EDIT,
    payload: { editValue }
});

export const updateMessage = (id, value) => ({
    type: UPDATE_MESSAGE,
    payload: { 
        id,
        value
    }
});

export const closeModal = () => ({
    type: CLOSE_MODAL
})