// Core
import { combineReducers } from "redux";

// Reducers
import { offersReducer } from "./offers/reducer";

export const rootReducer = combineReducers({
  offers: offersReducer
});
