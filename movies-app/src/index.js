import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import store from '../src/redux/store'; 
import App from "./components/app/App";

ReactDOM.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);