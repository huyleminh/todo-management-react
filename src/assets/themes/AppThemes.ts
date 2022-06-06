import { createTheme } from "@mui/material";
import { AppComponents } from "./AppComponents";
import { AppPalettesLight } from "./AppPalettes";
import { AppTypography } from "./AppTypography";

export const CustomMuiThemes = createTheme({
	typography: AppTypography,
	palette: AppPalettesLight,
	components: AppComponents,
});
