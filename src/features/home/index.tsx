import { AppLoading } from "components/common";
import React from "react";
import ToastService from "services/ToastService";

function HomePage() {
	return (
		<div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
			<AppLoading />
			<button onClick={() => ToastService.showSucess("Hello")}>CLick</button>
		</div>
	);
}

export default HomePage;
