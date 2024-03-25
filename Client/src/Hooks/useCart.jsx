// import React, { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

// const useCart = () => {
// 	const { user } = useContext(AuthContext);
// 	const { refetch, data: cart = [] } = useQuery({
// 		queryKey: ["carts", user?.email],
// 		queryFn: async () => {
// 			const res = await fetch(
// 				`http://localhost:3000/carts?email=${user?.email}`
// 			);
// 			return res.json();
// 		},
// 	});
// 	return [cart, refetch];
// };

// export default useCart;
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useCart = () => {
	const { user } = useContext(AuthContext);
	// console.log(user.email)
	const token = localStorage.getItem("access-token");

	const { refetch, data: cart = [] } = useQuery({
		queryKey: ["carts", user?.email],
		queryFn: async () => {
			const res = await fetch(
				`http://localhost:3000/carts?email=${user?.email}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			return res.json();
		},
	});

	return [cart, refetch];
};
export default useCart;
