import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
