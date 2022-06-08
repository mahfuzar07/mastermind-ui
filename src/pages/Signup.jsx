import React from 'react';
import Navbar from '../components/Navbar';

function Signup() {
	return (
		<div className="pb-5">
			<header className="shadow-md w-full sticky top-0 left-0 z-10 bg-[#523970]">
				<Navbar />
			</header>

			<div className="mt-[64px]">
				<form action="">
					<div className="pt-[1%] flex justify-center items-center gap-5 text-[#523970]">
						<label htmlFor="label" className="font-semibold">
							Select Country
						</label>
						<select className="border border-blue-500 py-1 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500 text-black">
							<option>Bangladesh</option>
							<option>India</option>
							<option>Nepal</option>
						</select>
					</div>
					<div className="container  w-full flex space-y-10 md:space-y-0 flex-col md:flex-row items-center justify-between px-10   mx-auto mt-12 md:gap-5">
						{/* company information form */}
						<div className="md:w-[50%] w-full shadow-lg relative border pt-[50px] px-4 rounded-xl">
							<h1 className="bg-[#523970] text-center  py-2 absolute top-[-20px] rounded-md inset-x-12 text-white">
								Company Information
							</h1>

							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Company Name
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Name of the Company"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										IATA Membership Code
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="IATA Number"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Website
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Website URL"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Email address
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="email"
										placeholder="Bussiness email address"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Phone number
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="phone"
										placeholder="Phone Number"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Address
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Enter Address"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										City
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Enter City"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Zip/Postal Code
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Zip/Postal Code"
									/>
								</div>
							</div>
						</div>
						{/* Account information form */}
						<div className="md:w-[50%] w-full shadow-lg relative border pt-[50px] px-4 rounded-xl">
							<h1 className="bg-[#523970] text-center  py-2 absolute top-[-20px] rounded-md inset-x-12 text-white">
								Account Information
							</h1>

							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										First Name
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Last Name
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full md:w-1/2 px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Phone Number
									</label>
									<input
										className="appearance-none block w-full border border-[#523970] text-[#523970]   rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="text"
										placeholder="Phone Number"
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Email address
									</label>
									<input
										className="appearance-none block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="email"
										placeholder="Bussiness email address"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full  px-3">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Password
									</label>
									<input
										className="block w-full border-[#523970] text-[#523970] border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="password"
										placeholder="Enter Password"
									/>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-2">
								<div className="w-full  px-3 ">
									<label className="block  tracking-wide text-[#523970] text-sm font-bold mb-2" htmlFor="grid-first-name">
										Re-Enter Password
									</label>
									<input
										className="block w-full text-[#523970] border border-[#523970]  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-[#523970]"
										type="password"
										placeholder="Confirm Password"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center">
						<button className="mt-5 px-32 py-2 rounded-lg text-white bg-[#523970]">
							<a href="/">Submit Application </a>
						</button>
					</div>
				</form>
				<div className="text-center">
					<p className="text-[#685383] ">
						Already have an account?
						<button className="text-[#523970] font-bold my-2"> Login now</button>
					</p>
				</div>
				<div className="text-center text-sm mt-[3%]">
					<p className="text-[#685383] mb-3">You can Sign up with</p>
					<div className="flex justify-center items-center">
						<a href="/">
							<img className="h-[40px] w-[70px]" src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
						</a>
						<a href="/">
							<img className="h-[40px] w-[70px]" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
						</a>
						<a href="/">
							<img className="h-[40px] w-[70px]" src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
