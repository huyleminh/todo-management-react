import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Box, Divider } from "@mui/material";
import appIcon from "assets/images/todo4.jpg";
import { Link as RouterLink } from "react-router-dom";
import { SidebarAccordion } from "./components";
import "./styles.scss";

export interface IAppSidebar {
	open?: boolean;
	onToggle?: any;
}

export function AppSidebar(props: IAppSidebar) {
	const { open, onToggle } = props;
	const activeClassName = open ? "" : "hide";

	const handleToggle = () => {
		if (!onToggle) {
			return;
		}

		onToggle();
	};

	return (
		<aside className={`sidebar ${activeClassName}`}>
			<Box className="sidebar-header">
				<Box className="sidebar-header-title">
					<Box>
						<img src={appIcon} alt="app_icon" />
					</Box>
				</Box>

				<Box className="sidebar-header-toggle">
					<button className="sidebar-header-toggle-btn" onClick={handleToggle}>
						{open && <ArrowBackIosNewRoundedIcon />}
						{!open && <ArrowForwardIosRoundedIcon />}
					</button>
				</Box>
			</Box>

			<Box className="sidebar-body">
				<Box className="sidebar-body-item" sx={{ margin: "0.5rem 0" }}>
					<RouterLink to="#">
						<HomeRounded fontSize="small" />
						<span>Trang chủ</span>
					</RouterLink>
				</Box>

				<SidebarAccordion title="Hello">
					<Box className="sidebar-body-item">
						<RouterLink to="#" className="active">
							<HomeRounded fontSize="small" />
							<span>Trang chủ</span>
						</RouterLink>
					</Box>

					<Box className="sidebar-body-item">
						<RouterLink to="#">
							<HomeRounded fontSize="small" />
							<span>Trang chủ</span>
						</RouterLink>
					</Box>

					<Box className="sidebar-body-item">
						<RouterLink to="#">
							<HomeRounded fontSize="small" />
							<span>Trang chủ</span>
						</RouterLink>
					</Box>

					<Box className="sidebar-body-item">
						<RouterLink to="#">
							<HomeRounded fontSize="small" />
							<span>Trang chủ</span>
						</RouterLink>
					</Box>
				</SidebarAccordion>
			</Box>

			<Divider />

			<Box className="sidebar-footer">
				<Box className="sidebar-footer-item">
					<RouterLink to="#">
						<SettingsRoundedIcon fontSize="small" />
						<span>Cài đặt</span>
					</RouterLink>
				</Box>
			</Box>
		</aside>
	);
}
