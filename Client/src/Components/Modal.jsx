import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Modal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { signUpWithGmail, login } = useContext(AuthContext);
	const [errorMessage, setErrorMessage] = useState("");

	// REDIRECTING TO HOME PAGE OR SPECIFIC SPACE
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from?.pathname || "/";

	const onSubmit = (data) => {
		const email = data.email;
		const password = data.password;

		// console.log(email, password);

		login(email, password)
			.then((result) => {
				const user = result.user;
				alert("Login Successfully");
				document.getElementById("my_modal_5").close();
				navigate(from, { replace: true });
			})
			.catch((error) => {
				const errorMessage = error.message;
				setErrorMessage("Provide a correct email and password");
			});
	};

	//Google Sign-In
	const handleLogin = () => {
		signUpWithGmail()
			.then((result) => {
				const user = result.user;
				alert("Login Successfully");
				document.getElementById("my_modal_5").close();
				navigate(from, { replace: true });
			})
			.catch((error) => console.log(error));
	};
	return (
		<dialog id="my_modal_5" className="modal  modal-middle sm:modal-middle">
			<div className="modal-box ">
				<div className="modal-action flex justify-center flex-col mt-0">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="card-body"
						method="dialog"
					>
						<h3 className=" ">Login</h3>

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
						{errorMessage ? (
							<p className="text-orange text-xs italic "> {errorMessage}</p>
						) : (
							""
						)}
						{/* LOGIN BUTTON */}
						<div className="form-control mt-4">
							<input
								type="submit"
								value="Login"
								className="btn bg-orange text-white font-quicksand"
							/>
						</div>
						<p className="text-center my-2 font-quicksand ">
							Do not have an account?
							<Link
								to="/signup"
								className=" font-quicksand underline text-orange ml-1"
							>
								SignUp Now!
							</Link>
						</p>
						<button
							htmlFor="my-modal-5"
							onClick={() => document.getElementById("my_modal_5").close()}
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						>
							✕
						</button>
					</form>

					{/* { SIGN IN THROUGH SOCIAL MEDIA} */}
					<div className="text-center space-x-3 mb-5">
						<button
							className="btn btn-circle hover:bg-red-600 hover:text-white"
							onClick={handleLogin}
						>
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
			</div>
		</dialog>
	);
};

export default Modal;
