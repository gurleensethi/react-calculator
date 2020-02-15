import * as React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { rootReducer } from "./store";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(rootReducer);
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
