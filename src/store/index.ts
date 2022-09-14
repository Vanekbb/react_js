import { createStore, compose } from "redux";
import { profileReducer } from "./profile/reducer";


export const composeEnhancers =
//@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//@ts-ignore
export const store = createStore(profileReducer, composeEnhancers())
