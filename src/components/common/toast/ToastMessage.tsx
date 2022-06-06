import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { AlertTitle, Stack, Typography } from "@mui/material";
import { toast, TypeOptions } from "material-react-toastify";
import React from "react";

export interface IToastMessage {
	type: TypeOptions;
	title: string;
	message?: string;
}

export function ToastMessage(props: IToastMessage) {
	const { type, title, message } = props;
	let icon: JSX.Element = <></>;
	switch (type) {
		case toast.TYPE.ERROR:
			icon = <ErrorOutlineRoundedIcon fontSize="small" />;
			break;
		case toast.TYPE.SUCCESS:
			icon = <CheckCircleOutlineRoundedIcon fontSize="small" />;
			break;
		case toast.TYPE.WARNING:
			icon = <WarningAmberRoundedIcon fontSize="small" />;
			break;
		case toast.TYPE.INFO:
			icon = <InfoOutlinedIcon fontSize="small" />;
			break;
	}
	return (
		<Stack direction="row" spacing={1} sx={{ py: 1 }}>
			{icon}
			<Stack>
				<AlertTitle sx={{ fontSize: "16px" }}>{title}</AlertTitle>
				{message && <Typography sx={{ fontSize: "14px" }}>{message}</Typography>}
			</Stack>
		</Stack>
	);
}
