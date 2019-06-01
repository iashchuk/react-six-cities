// Core
import { combineReducers } from "redux";

// Reducers
import { offersReducer } from "./offers/reducer";
import { fetchReducer } from "./fetch/reducer";

export const rootReducer = combineReducers({
  offers: offersReducer,
  fetch: fetchReducer
});
