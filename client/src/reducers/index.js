import { combineReducers } from "redux";
import chat from "../ChatPage/Chat/reducer";
import editModal from "../ChatPage/EditModal/reducer";
import login from "../LoginPage/reducer";

const rootReducer = combineReducers({
    chat,
    editModal,
    login
});

export default rootReducer;