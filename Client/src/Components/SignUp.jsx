import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { createUser, login } = useContext(AuthContext);

	// REDIRECTING TO HOME PAGE OR SPECIFIC SPACE
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		const email = data.email;
		const password = data.password;

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				alert("Account Created successfully!");
				document.getElementById("my_modal_5").close();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorCode = error.errorCode;
				const errorMessage = error.message;
			});
	};
	return (
		<div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
			<div className="modal-action flex justify-center flex-col mt-0">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="card-body"
					method="dialog"
				>
					<h3 className="font-bold  font-quicksand  text-center text-2xl">
						Create An Account
					</h3>

					{/* Email */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							className="input input-bordered"
							// required
							{...register("email")}
						/>
					</div>

					{/* Password */}
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="password"
							className="input input-bordered"
							// required
							{...register("password")}
						/>
						<label className="label mt-1">
							<a href="#" className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label>
					</div>

					{/* ERROR TEXT */}

					<Link
						to="/"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</Link>

					{/* LOGIN BUTTON */}
					<div className="form-control mt-6">
						<input
							type="submit"
							value="Sign-Up"
							className="btn bg-orange text-white font-quicksand"
						/>
					</div>
					<p className="text-center my-2 font-quicksand ">
						Have an account?
						<button
							className=" font-quicksand underline text-orange ml-1"
							onClick={() => document.getElementById("my_modal_5").showModal()}
						>
							Login
						</button>
					</p>

					{/* <Link
						to="/"
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</Link> */}
				</form>

				{/* { SIGN IN THROUGH SOCIAL MEDIA} */}
				<div className="text-center space-x-3 mb-5">
					<button className="btn btn-circle hover:bg-red hover:text-white">
						<FaGoogle fontSize={20} />
					</button>
					<button className="btn btn-circle hover:bg-faBlue hover:text-white">
						<FaFacebookF fontSize={20} />
					</button>
					<button className="btn btn-circle hover:bg-black hover:text-white">
						<FaGithub fontSize={20} />
					</button>
				</div>
			</div>
			<Modal />
		</div>
	);
};

export default SignUp;
