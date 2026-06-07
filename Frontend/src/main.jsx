import React from "react"; //main react component
import ReactDOM from "react-dom/client"; //navigate pages
import { BrowserRouter } from "react-router-dom"; //itb to navigate pages
import App from "./App"; //import main app component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //render the app component inside the root element
  //strict mode to catch potential problems in the app
  //wrap the app component with the browser router to enable navigation between pages 
  //render the main app component

  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
);
