import { createStore } from 'redux'
import changeState from '../reducers'

const store = createStore(changeState);
export default store