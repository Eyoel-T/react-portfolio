import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}
