import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./Components/App.jsx";
import registerServiceWorker from "./registerServiceWorker";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
