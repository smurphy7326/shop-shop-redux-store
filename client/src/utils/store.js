import {createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducers';

const rootReducer = combineReducers({
    shop: reducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware)
    );
};


export default configureStore;
