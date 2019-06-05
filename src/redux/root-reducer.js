// Core
import { combineReducers } from "redux";

// Reducers
import { fetchReducer } from "./fetch/reducer";
import { hotelsReducer } from "./hotels/reducer";
import { authReducer } from "./auth/reducer";

export const rootReducer = combineReducers({
  fetch: fetchReducer,
  hotels: hotelsReducer,
  auth: authReducer
});
