import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Order/Menu";
import SignUp from "../Components/SignUp";
import UpdateProfile from "../Pages/Home/Dashboard/UpdateProfile";
import CartPage from "../Pages/Home/Order/CartPage";
import Login from "../Components/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Home/Dashboard/Admin/Dashboard";
import Users from "./../Pages/Home/Dashboard/Admin/Users";
import AddMenu from "./../Pages/Home/Dashboard/Admin/AddMenu";
import ManageItems from "./../Pages/Home/Dashboard/Admin/ManageItems";
import UpdateMenu from "./../Pages/Home/Dashboard/Admin/UpdateMenu";
import Order from "../Pages/Home/Dashboard/Order";

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
				path: "/order",
				element: (
					<PrivateRouter>
						<Order />
					</PrivateRouter>
				),
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

	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "dashboard",
		element: (
			<PrivateRouter>
				<DashboardLayout />
			</PrivateRouter>
		),
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "add-menu",
				element: <AddMenu />,
			},
			{
				path: "manage-items",
				element: <ManageItems />,
			},
			{
				path: "update-menu/:id",
				element: <UpdateMenu />,
				loader: ({ params }) =>
					fetch(`http://localhost:3000/menu/${params.id}`),
			},
		],
	},
]);
export default router;
