import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
	const { updateUserProfile } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// REDIRECTING TO HOME PAGE OR SPECIFIC SPACE
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	// const onSubmit = (data) => {
	// 	const name = data.name;
	// 	const photoURL = data.photoURL;
	// 	updateUserProfile(name, photoURL)
	// 		.then(() => {})
	// 		.catch((error) => {});
	// };
	const onSubmit = (data) => {
		// Pass an object with name and photoURL properties
		updateUserProfile({
			name: data.name,
			photoURL: data.photoURL,
		})
			.then(() => {
				// Handle success if needed
				document.getElementById("my_modal_5").close();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				// Handle error if needed
			});
	};

	return (
		<div className="flex items-center justify-center font-quicksand h-screen">
			<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
					<h3 className="font-bold  font-quicksand  text-center text-xl">
						Update Profile
					</h3>
					<div className="form-control ">
						<label className="label">
							<span className="label-text font-quicksand">Name</span>
						</label>
						<input
							{...register("name")}
							type="text"
							placeholder="Your name"
							className="input input-bordered font-quicksand"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text font-quicksand">Upload Photo</span>
						</label>
						<input
							type="text"
							{...register("photoURL")}
							placeholder="photoURL"
							className="input input-bordered font-quicksand"
							required
						/>
						{/* TODO:UPLOADING IMAGE WILL BE LATER */}
						{/* <input
							type="file"
							className="file-input file-input-bordered w-full max-w-xs"
						/> */}
					</div>
					<div className="form-control mt-6">
						<button className="btn bg-orange text-white font-quicksand">
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateProfile;
