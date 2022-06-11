import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import facebook from '../images/social icon/facebook (2).png';
import google from '../images/social icon/search.png';
import twitter from '../images/social icon/twitter.png';

function Login() {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<section className="h-full md:h-screen  bg-loginBg bg-cover">
			<div className="top-0 h-[10%] w-full fixed bg-[#523970]">
				<Navbar />
			</div>
			<div className="container w-full mx-auto px-10 flex justify-between flex-col-reverse md:flex-row pt-[9%] md:pt-[7%]  pb-10">
				<div className="max-w-xl flex-2 p-5 flex flex-col items-center justify-center text-center text-white ">
					<div className="w-md text-5xl mb-5 font-semibold">
						<h1>One Platform</h1>
						<h1> All travel Solutions</h1>
					</div>
					<div className="max-w-md  mx-auto text-lg  mb-5">
						<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
					</div>
				</div>

				<div className="flex-1 max-w-md w-full flex flex-col px-10 py-5 md:py-4 mx-auto  md:mx-0  md:gap-5 bg-white rounded-xl mt-[6%] md:mt-0 mb-5 md:mb-0">
					<h1 className="text-center text-2xl font-bold md:mb-[2%] mb-[10%] text-[#523970]">Login</h1>
					<form action="">
						<div className="flex justify-center items-center gap-5 text-[#523970] mb-[10%]">
							<label htmlFor="label2" className="font-semibold">
								Region
							</label>
							<select className="border border-blue-500 py-1 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500 text-black">
								<option>Bangladesh</option>
								<option>India</option>
								<option>Nepal</option>
							</select>
						</div>

						<div className="flex flex-wrap mb-5 md:mb-2">
							<div className="w-full">
								<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
									Username
								</label>
								<input
									className="block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
									type="text"
									placeholder="Enter Username"
								/>
							</div>
						</div>
						<div className="flex flex-wrap mb-5 md:mb-2">
							<div className="w-full  relative">
								<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
									Password
								</label>
								<input
									className="block w-full text-[#523970] border border-[#523970]  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
									type={open === false ? 'password' : 'test'}
									placeholder="Enter Password"
								/>
								<div className="top-9 right-8 absolute text-[#b1afb3]">
									{open === false ? <VisibilityOffIcon onClick={toggle} /> : <VisibilityIcon onClick={toggle} />}
								</div>
							</div>
						</div>
						<div className="flex flex-wrap justify-between mb-5 md:mb-2">
							<div className="form-check flex justify-center items-center">
								<input
									className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="text-sm form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
									Remember me
								</label>
							</div>
							<a className="text-sm font-bold text-[#523970]" href="/">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
							<button className="w-full my-3 py-2 rounded-lg text-white bg-[#523970]">
								<a href="/"> Login </a>
							</button>
						</div>
					</form>
					<div className="text-center">
						<p className="text-[#685383] ">
							Dont't have an account?
							<a href="/" className="text-[#523970] font-bold ml-2">
								Register Now
							</a>
						</p>
					</div>
					<div className="text-center text-sm">
						<p className="text-[#685383] mb-3">You can Sign up with</p>
						<div className="flex gap-10 justify-center items-center">
							<a href="/">
								<img className="h-10 w-10" src={google} alt="" />
							</a>
							<a href="/">
								<img className="h-10 w-10" src={facebook} alt="" />
							</a>
							<a href="/">
								<img className="h-10 w-10" src={twitter} alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
