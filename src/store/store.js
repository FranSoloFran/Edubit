import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { coursesReducer } from "../reducers/coursesReducer";
import { loadingReducer } from "../reducers/loadingReducer";
import { msgboxReducer } from "../reducers/msgboxReducer";
import { tradingReducer } from "../reducers/tradingReducer";

const reducers = combineReducers({
  auth: authReducer,
  msg: msgboxReducer,
  loading: loadingReducer,
  trading: tradingReducer,
  courses: coursesReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
