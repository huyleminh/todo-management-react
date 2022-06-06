import React from "react";
import "./styles.scss";

export interface IAppLoadingProps {}

export function AppLoading(props: IAppLoadingProps) {
	return (
		<div className="loading-custom">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
