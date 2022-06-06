import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import { LoginPage, RegisterPage } from "./features/auth";
import Dashboard from "./features/dashboard";
import { ForbiddenPage, PageNotFound } from "./features/errors";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/403" element={<ForbiddenPage />} />
			<Route
				path="/*"
				element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
				}
			/>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
