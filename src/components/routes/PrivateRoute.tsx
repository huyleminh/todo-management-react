import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute(props: any) {
	const { children } = props;
	const [isAuth, setIsAuth] = useState(false);
	const [isAuthenticating, setIsAuthenticating] = useState(true);

	useEffect(() => {
		const fetchToken = async () => {
			// const user = JSON.parse(localStorage.getItem("user"));
			// if (!user) {
			//     setIsAuthenticating(false);
			//     setIsAuth(false);
			//     return;
			// }
			// if (user && !user.token) {
			//     setIsAuthenticating(false);
			//     setIsAuth(false);
			//     return;
			// }

			// // Find valid role of current path name
			// const currRole = path.match(/^\/admin/g) ? 1 : path.match(/^\/employee/g) ? 2 : 3;
			// try {
			//     const res = await LoginAPI.verifyAccessToken(user.token);

			//     if (res.status === 200 && matchRole(currRole, res.data.role)) {
			//         setIsAuth(true);
			//         setIsAuthenticating(false);
			//     } else {
			//         setIsAuth(false);
			//         setIsAuthenticating(false);
			//     }
			// } catch (error) {
			//     console.log(error);
			//     setIsAuth(false);
			//     setIsAuthenticating(false);
			// }
			setTimeout(() => {
				setIsAuth(true);
				setIsAuthenticating(false);
			}, 1000);
		};

		fetchToken();
	}, []);

	if (isAuthenticating) {
		return (
			// <Loading
			// 	tip="Verifying your information, please wait for a moment..."
			// 	style={{
			// 		width: "100%",
			// 		height: "100vh",
			// 		display: "flex",
			// 		justifyContent: "center",
			// 		alignItems: "center",
			// 	}}
			// />
			<div>Verifying your information, please wait for a moment..</div>
		);
	}

	if (isAuth) {
		return children;
	} else {
		alert("You are not allowed to access this page!");
		return <Navigate to="/403" replace={true} />;
	}
}

export default PrivateRoute;
