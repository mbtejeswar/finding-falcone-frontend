import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import Reducer from './reducers/Reducer';

export const middlewares = [ReduxThunk];
export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)



 export const store = createStoreWithMiddleWare(Reducer);


