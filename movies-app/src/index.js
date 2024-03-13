import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/app/App";

import { Provider } from 'react-redux';
import store from '../src/components/redux/store'; // Путь к вашему Redux store
import App from "./components/app/App";

// обертка, чтобы все компоненты получили доступ к состоянию Redux
ReactDOM.render(
  <Provider store={store}> 
  {/* <React.StrictMode> */}
      <App />
  {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById("root")
);
