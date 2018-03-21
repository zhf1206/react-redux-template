import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import * as home from '../reducers/home';
import * as login from '../reducers/login';

const loggerMiddleware = createLogger();

// let store = createStore(
//   combineReducers({...home,...login}),
//   applyMiddleware(thunk)
// );

let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        combineReducers({...home,...login}),
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        combineReducers({...home,...login}),
        compose(applyMiddleware(thunk,loggerMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}

export default store;
// export const history = syncHistoryWithStore(store);