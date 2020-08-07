import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import changeState from './reducers';

const store = createStore(changeState, applyMiddleware(thunkMiddleware));
export default store;
