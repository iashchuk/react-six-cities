// Core
import { combineReducers } from "redux";

// Reducers
import { hotelsReducer } from "./hotels/reducer";

export const rootReducer = combineReducers({
  hotels: hotelsReducer
});
