import { combineReducers } from "redux";
import { eventReducer } from "./modules/Event/_redux/eventReducer";

const reducer = combineReducers({
    eventStore : eventReducer
})

export default reducer;