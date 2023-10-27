import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./main/Calculator";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className="corpo">
      <table>
        <tr>
          <td>
            <h1>Calculadora</h1>
          </td>
        </tr>
        <tr>
          <td>
            <Calculator />
          </td>
        </tr>
      </table>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
