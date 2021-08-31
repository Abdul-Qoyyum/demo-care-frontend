import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./app/reducer";
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(promise, ReduxThunk)
    )
);

export default store;