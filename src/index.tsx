// React
import React from "react";
// React

// React DOM
import ReactDOM from "react-dom/client";
// React DOM

// App
import App from "./App";
// App

// Redux Toolkit
import { Provider } from "react-redux";
// Redux Toolkit

// Router
import { BrowserRouter } from "react-router-dom";
import { store } from "./StateManagement/ReduxToolkit/Store/Store";
// Router

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
