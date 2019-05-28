import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";

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

if (process.env.NODE_ENV !== `test`) {
  middlewares.push(logger);
}

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const enhansedStore = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhansedStore);
