// Core
import { combineReducers } from "redux";

// Reducers
import { offersReducer } from "./core/offers/reducer";

export const rootReducer = combineReducers({
  offers: offersReducer
});
