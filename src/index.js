import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";
import { registerLicense } from "@syncfusion/ej2-base";
import UserContext from "./Components/Auth/Context/UserContext";
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFaclxJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRiXn5YdHNQR2FaVEI="
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
    <Analytics />
      <App />
    </UserContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
