import { combineReducers } from "redux";
import chat from "../components/Chat/reducer";
import editModal from "../components/EditModal/reducer";

const rootReducer = combineReducers({
    chat,
    editModal
});

export default rootReducer;