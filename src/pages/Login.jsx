import React from 'react';
import Navbar from '../components/Navbar';

function Login() {
	return (
		<section className="h-full md:h-screen  bg-loginBg bg-cover">
			<div className="top-0 h-[10%] w-full fixed bg-[#523970]">
				<Navbar />
			</div>
			<div className="max-w-6xl w-full mx-auto  flex justify-between flex-col-reverse md:flex-row pt-[9%] md:pt-[7%]  pb-10">
				<div className="max-w-xl flex-2 p-5 flex flex-col items-center justify-center text-center text-white ">
					<div className="w-md text-6xl mb-5 font-semibold">
						<h1>One Platform</h1>
						<h1> All travel Solutions</h1>
					</div>
					<div className="max-w-md  mx-auto text-xl  mb-5">
						<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
					</div>
				</div>

				<div className="flex-1 max-w-md w-full flex flex-col px-10 py-5 md:py-4 mx-auto  md:mx-0  md:gap-5 bg-white rounded-xl mt-[6%] md:mt-0 mb-5 md:mb-0">
					<h1 className="text-center text-2xl font-bold md:mb-[2%] mb-[10%] text-[#523970]">Login</h1>
					<form action="">
						<div className="flex justify-center items-center gap-5 text-[#523970] mb-[10%]">
							<label htmlFor="label" className="font-semibold">
								Region
							</label>
							<select class="border border-blue-500 py-1 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500 text-black">
								<option>Bangladesh</option>
								<option>India</option>
								<option>Nepal</option>
							</select>
						</div>

						<div className="flex flex-wrap mb-5 md:mb-2">
							<div className="w-full ">
								<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" for="grid-first-name">
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
							<div className="w-full">
								<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" for="grid-first-name">
									Password
								</label>
								<input
									className="block w-full text-[#523970] border border-[#523970]  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
									type="password"
									placeholder="Enter Password"
								/>
							</div>
						</div>
						<div className="flex flex-wrap justify-between mb-5 md:mb-2">
							<div class="form-check flex justify-center items-center">
								<input
									class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label class="text-sm form-check-label inline-block text-gray-800" for="flexCheckDefault">
									Remember me
								</label>
							</div>
							<a className="text-sm font-bold text-[#523970]" href="/">
								Forgot Password?
							</a>
						</div>
						<div className="text-center">
							<button className="mt-2 w-full my-3 py-2 rounded-lg text-white bg-[#523970]">
								<a href="/"> Login </a>
							</button>
						</div>
					</form>
					<div className="text-center mb-2">
						<p className="text-[#685383] ">
							Dont't have an account?
							<a href="/" className="text-[#523970] font-bold my-2 ml-2">
								Register Now
							</a>
						</p>
					</div>
					<div className="text-center text-sm mt-[1%]">
						<p className="text-[#685383] mb-1">You can Sign up with</p>
						<div className="flex justify-center items-center">
							<a href="/">
								<img className="h-[50px] w-[70px]" src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
							</a>
							<a href="/">
								<img className="h-[40px] w-[70px]" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
							</a>
							<a href="/">
								<img
									className="h-[40px] w-[70px]"
									src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png"
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
