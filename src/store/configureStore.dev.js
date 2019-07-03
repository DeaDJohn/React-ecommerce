import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

import rootReducer from "../reducers";

const enhancer = composeWithDevTools(
    applyMiddleware(logger())
);

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState, enhancer);
};