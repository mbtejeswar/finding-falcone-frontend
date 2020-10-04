import {createStore} from 'redux';
import Reducer from './reducers/Reducer';

// const rootreducer = combineReducers()


const store = createStore(Reducer);


export default store;