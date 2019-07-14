import { combineReducers } from "redux";
import chat from "../components/Chat/reducer";

const rootReducer = combineReducers({
    chat
});

export default rootReducer;