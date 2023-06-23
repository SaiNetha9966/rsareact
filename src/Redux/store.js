import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { commonReducer } from "./CommonReducers";
const logger = createLogger();

const store = createStore(commonReducer, applyMiddleware(thunk, logger));

export default store;
