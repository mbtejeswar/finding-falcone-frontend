import { applyMiddleware, createStore } from 'redux';
import Reducer from '../store/reducers/Reducer';
import { middlewares } from '../store/store';




export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(Reducer, initialState);
};