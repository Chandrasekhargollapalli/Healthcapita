import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DateProvider from "./utils/DateProvider.jsx";
import store from "./store/store.jsx";
import {Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
<DateProvider>
    <App />
    <ToastContainer position="top-left" />

    <ToastContainer />
    </DateProvider>
  </BrowserRouter>
  </Provider>
  

);
