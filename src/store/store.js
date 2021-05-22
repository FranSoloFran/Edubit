
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { loadingReducer } from '../reducers/loadingReducer';
import { msgboxReducer } from '../reducers/msgboxReducer';



const reducers = combineReducers({
    auth:authReducer,
    msg: msgboxReducer,
    loading: loadingReducer,
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)