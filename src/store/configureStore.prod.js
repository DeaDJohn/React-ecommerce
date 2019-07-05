import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createlogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// const logger = createlogger({});

const enhancer = composeWithDevTools(
    applyMiddleware(thunk),
    // applyMiddleware(logger)
)

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState, enhancer);
};