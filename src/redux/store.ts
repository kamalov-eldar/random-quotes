import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Action } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import quotesReducer from './reducer';
import { ThunkAction } from 'redux-thunk';//для типизации


const rootReducer = quotesReducer;

type RootReducerType = typeof quotesReducer;

export type AppStateType = ReturnType<RootReducerType>;

// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R=void> = ThunkAction <R, AppStateType, unknown, A>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

export default store;