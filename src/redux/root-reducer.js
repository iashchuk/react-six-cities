// Core
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import { fetchReducer } from "./fetch/reducer";
import { hotelsReducer } from "./hotels/reducer";
import { authReducer } from "./auth/reducer";
import { offerReducer } from "./offer/reducer";

export const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    fetch: fetchReducer,
    hotels: hotelsReducer,
    auth: authReducer,
    offer: offerReducer
  });
