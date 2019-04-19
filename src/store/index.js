import { createStore, applyMiddleware,  } from 'redux';
import {Logger} from 'redux-logger';
import combineReducers from '../reducers/index';


const store = createStore(combineReducers);
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export default store;