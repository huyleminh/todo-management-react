import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/scss/index.scss";
import { CustomMuiThemes } from "./assets/themes/AppThemes";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={CustomMuiThemes}>
			<BrowserRouter>
				<App />
				<ToastContainer
					position="top-right"
					autoClose={2500}
					hideProgressBar
					newestOnTop={true}
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
