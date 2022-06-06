import { Components } from "@mui/material/styles";

export const AppComponents: Components = {
	MuiFilledInput: {
		styleOverrides: {
			root: {
				fontSize: "0.875rem",
				backgroundColor: "#919eab14",
				borderRadius: "0.25rem",
				"&.Mui-error": {
					color: "#FF4842",
					backgroundColor: "#fddad9a6",
				},
			},
			underline: {
				"&:before": {
					borderBottom: "unset",
				},
				"&:hover:not(.Mui-focused):before": {
					borderBottom: "unset",
				},
				"&:hover:not(.Mui-disabled):before": {
					borderBottom: "unset",
				},
				"&:after": {
					// focused
					borderBottom: "unset",
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				fontWeight: 600,
				boxShadow: "none",
				textTransform: "none",
				"&:hover": {
					boxShadow: "none",
				},
			},
		},
	},
	MuiInputLabel: {
		styleOverrides: {
			root: {
				fontSize: "0.875rem",
			},
			asterisk: {
				color: "#FF4842",
			},
		},
	},
	MuiPaginationItem: {
		styleOverrides: {
			root: {
				"&:hover": {
					backgroundColor: "#c4a0f3",
					color: "#fff",
				},
				"&.Mui-selected": {
					backgroundColor: "#6E00FF",
					color: "#fff",
					"&:hover": {
						backgroundColor: "#6E00FF",
					},
				},
			},
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: {
				fontSize: "15px",
				color: "#000",
			},
		},
	},
	MuiFormControlLabel: {
		styleOverrides: {
			root: {
				"&>.MuiFormControlLabel-label": {
					fontSize: "15px",
					color: "#000",
				},
			},
		},
	},
	MuiChip: {
		styleOverrides: {
			root: {
				fontWeight: 600,
				fontSize: "13px",
				"&>.MuiChip-label": {
					paddingLeft: "1rem",
					paddingRight: "1rem",
				},
			},
		},
	},
	MuiMenuItem: {
		styleOverrides: {
			root: {
				fontSize: "15px",
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				boxShadow: "rgb(58 53 65 / 10%) 0px 2px 10px 0px;",
				borderRadius: "0.5rem",
			},
		},
	},
	MuiTableHead: {
		styleOverrides: {
			root: {
				backgroundColor: "#fafafa",
			},
		},
	},
	MuiTableCell: {
		styleOverrides: {
			root: {
				fontSize: "0.875rem",
				padding: "0.75rem 1rem",
			},
		},
	},
	MuiTableRow: {
		styleOverrides: {},
	},
};
