import CloseIcon from "@mui/icons-material/Close";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import {
	Alert,
	Button,
	CircularProgress,
	Collapse,
	Container,
	Divider,
	Grid,
	IconButton,
	Link,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/images/google.svg";
import loginImage from "../../../assets/images/login.svg";
import AppSnackBar from "../../../components/common/SnackBar/AppSnackBar";
import AppConfigs from "../../../configs/AppConfigs";
import AuthService from "../../../services/AuthService";
import { IGoogleLoginResponse, ILoginResponse, IUserLogin } from "../../../types/AuthModels";

export function LoginPage() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [isShowSnackBar, setIsShowSnackBar] = useState(false);

	const [userLogin, setUserLogin] = useState<IUserLogin>({ email: "", password: "" });

	const [userLoginError, setUserLoginError] = useState({ email: false, password: false });

	const [alert, setAlert] = useState({ open: false, msg: "" });

	const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;

		setUserLogin({
			...userLogin,
			[target.name]: target.value,
		});
	};

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (userLoginError.email || userLoginError.password) {
			return;
		}

		setIsLoading(true);
		try {
			const response = await AuthService.postLoginAsync(userLogin.email, userLogin.password);
			setIsLoading(false);

			if (response.code === 200) {
				AuthService.setLocalData(response.data as ILoginResponse);
				navigate("/");
			} else if (response.code === 400) {
				setAlert({ ...alert, open: true, msg: response?.data as string });
			} else {
				throw new Error("unexpected_code");
			}
		} catch (error: any) {
			setIsLoading(false);
			console.log(error);
			setIsShowSnackBar(true);
		}
	};

	const handleValidateField = (event: React.FocusEvent<HTMLInputElement>) => {
		const target = event.target;
		if (!target.value) {
			return;
		}

		const rule = target.dataset["rule"] || "";

		if (!target.value.trim() || !target.value.match(new RegExp(rule))) {
			setUserLoginError({
				...userLoginError,
				[target.name]: true,
			});
			return;
		}

		setUserLoginError({
			...userLoginError,
			[target.name]: false,
		});
	};

	const responseOk = async (response: any) => {
		try {
			const res = await AuthService.getLoginGoogleAsync(
				response.tokenObj.id_token,
				response.tokenObj.token_type,
			);

			if (res.code === 200) {
				AuthService.setGoogleLocalData(res.data as IGoogleLoginResponse);
				navigate("/");
			} else if (res.code === 400) {
				setAlert({
					...alert,
					open: true,
					msg: "Kh??ng th??? x??c th???c t??i kho???n Google, vui l??ng th??? l???i sau",
				});
			} else {
				throw new Error("unexpected_code");
			}
		} catch (error) {
			console.log(error);
			setIsShowSnackBar(true);
		}
	};

	const responseFailure = (response: any) => {
		if (response.error === "popup_closed_by_user") {
			return;
		}
		setAlert({
			...alert,
			open: true,
			msg: "Kh??ng th??? x??c th???c t??i kho???n Google, vui l??ng th??? l???i sau",
		});
	};

	return (
		<Box
			className="wrapper"
			sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			<Container fixed>
				<Grid container spacing={0}>
					<Grid item lg={8} md={7} sx={{ display: { xs: "none", md: "block" } }}>
						<Box
							sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
						>
							<img
								src={loginImage}
								alt="login_image"
								style={{ width: "80%", height: "80%" }}
							/>
						</Box>
					</Grid>

					<Grid item lg={4} md={5} xs={12}>
						<Paper
							sx={{
								boxShadow: "-24px 24px 72px -8px rgb(145 158 171 / 24%)",
								padding: 4,
								borderRadius: 4,
							}}
						>
							<Stack direction="column" sx={{ marginBottom: 4 }}>
								<Collapse in={alert.open}>
									<Alert
										severity="warning"
										action={
											<IconButton
												aria-label="close"
												color="inherit"
												size="small"
												onClick={() => {
													setAlert({ open: false, msg: "" });
												}}
											>
												<CloseIcon fontSize="inherit" />
											</IconButton>
										}
										sx={{ mb: 2 }}
									>
										{alert.msg}
									</Alert>
								</Collapse>
								<Typography variant="h3" component="h3" sx={{ marginBottom: 2 }}>
									????ng Nh???p
								</Typography>
								<Typography variant="subtitle2">
									Ch??a c?? t??i kho???n?{" "}
									<Link
										href="/register"
										underline="hover"
										sx={{ fontWeight: 600 }}
									>
										????ng k??
									</Link>
								</Typography>
							</Stack>

							<form onSubmit={handleSubmit}>
								<Stack direction="column" sx={{ marginBottom: 2 }}>
									<TextField
										label="Email"
										variant="filled"
										type="email"
										required
										sx={{ marginBottom: 4 }}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<EmailRoundedIcon />
												</InputAdornment>
											),
										}}
										name="email"
										value={userLogin.email}
										onChange={handleChangeField}
										error={userLoginError.email}
										onBlur={handleValidateField}
										inputProps={{
											"data-rule": "^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$",
										}}
										helperText={
											userLoginError.email && "Email kh??ng ????ng ?????nh d???ng"
										}
									/>
									<TextField
										label="M???t kh???u"
										variant="filled"
										type="password"
										required
										sx={{ marginBottom: 2 }}
										InputProps={{
											endAdornment: (
												<InputAdornment position="end">
													<KeyRoundedIcon />
												</InputAdornment>
											),
										}}
										name="password"
										value={userLogin.password}
										onChange={handleChangeField}
										error={userLoginError.password}
										onBlur={handleValidateField}
										inputProps={{
											"data-rule":
												"^(?=.*?[A-Za-z0-9])(?=.*?[#?!@$%^&*.,]).{8,}$",
										}}
										helperText={
											userLoginError.password && (
												<Tooltip
													title={`M???t kh???u c?? ??t nh???t 8 k?? t???, bao g???m s???, ch??? c??i, ??t nh???t 1 ch??? v?? 1 trong c??c k?? t??? sau: #?!@$%^&*.,`}
													placement="bottom"
												>
													<Typography
														variant="caption"
														sx={{
															color: "#FF4842",
															fontSize: "0.8rem",
															display: "flex",
															alignItems: "center",
														}}
													>
														<span style={{ marginRight: "5px" }}>
															M???t kh???u kh??ng ????ng ?????nh d???ng
														</span>
														<HelpOutlineRoundedIcon fontSize="small" />
													</Typography>
												</Tooltip>
											)
										}
									/>
									<Typography
										sx={{ marginBottom: 2 }}
										textAlign="start"
										variant="subtitle2"
									>
										<Link href="forget-password" variant="subtitle2">
											Qu??n m???t kh???u?
										</Link>
									</Typography>
									<Button
										variant="contained"
										color="primary"
										size="large"
										type="submit"
									>
										{isLoading ? (
											<CircularProgress sx={{ color: "#FFF" }} size={30} />
										) : (
											"????ng nh???p"
										)}
									</Button>
								</Stack>
							</form>

							<Divider textAlign="center" sx={{ color: "#A4AFB9", marginBottom: 2 }}>
								<Typography variant="subtitle2">Ho???c ti???p t???c v???i</Typography>
							</Divider>

							<Stack
								direction="row"
								spacing={0}
								sx={{ height: "50px", display: "flex", justifyContent: "center" }}
							>
								<GoogleLogin
									clientId={AppConfigs.GOOGLE_AUTH_CLIENT_ID}
									onSuccess={responseOk}
									onFailure={responseFailure}
									cookiePolicy={"single_host_origin"}
									render={(renderProps) => (
										<Button
											onClick={renderProps.onClick}
											disabled={renderProps.disabled}
											sx={{ backgroundColor: "#919eab14" }}
										>
											<img
												src={googleIcon}
												alt="google_icon"
												style={{ width: "80%", height: "80%" }}
											/>
											<Typography variant="subtitle2" marginLeft={0.5}>
												Google
											</Typography>
										</Button>
									)}
								/>
							</Stack>
							<AppSnackBar
								open={isShowSnackBar}
								message={"???? c?? l???i x???y ra"}
								type="error"
								onClose={() => setIsShowSnackBar(false)}
							/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
