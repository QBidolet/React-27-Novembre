import {createStore, combineReducers} from "redux";
import counterReducer from "./counterReducer";

// npm install react-redux
// npm install redux

// const rootReducer = combineReducers({
//     a: counterReducer,
//     b: userReducer,
//     c: equipmentReducer,
// })
export const store = createStore(counterReducer);