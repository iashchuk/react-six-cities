import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
import { createAPI } from "../api/index.js";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => `#139BFE`,
    prevState: () => ` #1C5FAF`,
    action: () => `#149945`,
    nextState: () => `#A47104`,
    error: () => `#FF0005`
  }
});

const middlewares = [];

const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);
middlewares.push(historyMiddleware);

if (process.env.NODE_ENV !== `test`) {
  middlewares.push(logger);
}

const api = createAPI();
middlewares.push(thunk.withExtraArgument(api));

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const enhansedStore = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer(history), enhansedStore);

export { store, history };
