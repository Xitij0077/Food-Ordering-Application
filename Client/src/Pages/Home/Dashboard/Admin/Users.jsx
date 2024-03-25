import { useQuery } from "@tanstack/react-query";
import { RiAdminLine } from "react-icons/ri";
import React from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
const Users = () => {
	const { refetch, data: users = [] } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await fetch(`http://localhost:3000/users`);
			return res.json();
		},
	});
	return (
		<div>
			<div className="flex items-center justify-between m-4">
				<h5>All Users</h5>
				<h5>Total Users: {users.length}</h5>
			</div>
			{/* {Table} */}
			<div>
				<div className="overflow-x-auto">
					<table className="table table-zebra md:w-[870px]">
						{/* head */}
						<thead className="bg-orange text-white rounded-lg">
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{users.map((user, index) => (
								<tr key={index}>
									<th>{index + 1}</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.role === "admin" ? (
											<button className="btn btn-xs text-white bg-gray-700">
												<RiAdminLine />
											</button>
										) : (
											<button className="btn btn-xs text-white bg-green">
												<FaUsers />
											</button>
										)}
									</td>
									<td>
										<button className="btn btn-xs text-white bg-red">
											<FaTrashAlt />
										</button>
									</td>
								</tr>
							))}

							{/* row 3 */}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Users;
