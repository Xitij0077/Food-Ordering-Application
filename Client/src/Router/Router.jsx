import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Order/Menu";
import SignUp from "../Components/SignUp";
import UpdateProfile from "../Pages/Home/Dashboard/UpdateProfile";
import CartPage from "../Pages/Home/Order/CartPage";

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

			{
				path: "/cart-page",
				element: <CartPage />,
			},

			{
				path: "/update-profile",
				element: <UpdateProfile />,
			},
		],
	},

	{
		path: "/signup",
		element: <SignUp />,
	},
]);
export default router;
