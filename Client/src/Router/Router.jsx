import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Order/Menu";
import SignUp from "../Components/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
		],
	},

	{
		path: "/signup",
		element: <SignUp />,
	},
]);
export default router;
