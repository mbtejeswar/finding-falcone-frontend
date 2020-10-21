import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import Reducer from './reducers/Reducer';

// const rootreducer = combineReducers()
export const middlewares = [ReduxThunk];
export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)


// const store = createStore(Reducer);
 export const store = createStoreWithMiddleWare(Reducer);


// export default store;