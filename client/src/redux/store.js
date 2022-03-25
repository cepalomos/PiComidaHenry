import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import  thunk  from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;