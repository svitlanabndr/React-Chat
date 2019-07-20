import { combineReducers } from "redux";
import chat from "../ChatPage/Chat/reducer";
import editModal from "../ChatPage/EditModal/reducer";
import login from "../LoginPage/reducer";
import users from "../users/reducer";
import userPage from "../userPage/reducer";
import loading from "../Loading/reducer";

const rootReducer = combineReducers({
    chat,
    editModal,
    login,
    users,
    userPage,
    loading
});

export default rootReducer;