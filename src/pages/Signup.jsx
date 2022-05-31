import React from 'react';
import Navbar from '../components/Navbar';

function Signup() {
	return (
		<div>
			<header className="shadow-md w-full sticky top-0 left-0 z-10 bg-purple-900">
				<Navbar />
			</header>

			<div className="mt-[64px]">
				<form action="">
					<div className="pt-[30px] flex justify-center items-center gap-5 text-purple-800">
						<label htmlFor="label" className="font-semibold">
							Select Country
						</label>
						<select class="border border-blue-500 py-1 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500 text-black">
							<option>Bangladesh</option>
							<option>India</option>
							<option>Nepal</option>
						</select>
					</div>
					<div className="max-w-6xl w-full flex space-y-10 md:space-y-0 flex-col md:flex-row items-center justify-between px-5   mx-auto mt-12 md:gap-5">
						{/* company information form */}
						<div className="md:w-[50%] w-full shadow-lg relative border pt-[50px] px-2">
							<h1 className="bg-purple-900 text-center  py-2 absolute top-[-20px] rounded-md inset-x-12 text-white">
								Company Information
							</h1>

							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Company Name
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Name of the Company"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										IATA Membership Code
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="IATA Number"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Website
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Website URL"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Email address
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="email"
										placeholder="Bussiness email address"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Phone number
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="phone"
										placeholder="Phone Number"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Address
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Enter Address"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										City
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Enter City"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Zip/Postal Code
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Zip/Postal Code"
									/>
								</div>
							</div>
						</div>
						{/* Account information form */}
						<div className="md:w-[50%] w-full shadow-lg relative border pt-[50px] px-2">
							<h1 className="bg-purple-900 text-center  py-2 absolute top-[-20px] rounded-md inset-x-12 text-white">
								Account Information
							</h1>

							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										First Name
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Last Name
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full md:w-1/2 px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Phone Number
									</label>
									<input
										class="appearance-none block w-full border border-purple-500 text-purple-900   rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="text"
										placeholder="Phone Number"
									/>
								</div>
								<div class="w-full md:w-1/2 px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Email address
									</label>
									<input
										class="appearance-none block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="email"
										placeholder="Bussiness email address"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full  px-3">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Password
									</label>
									<input
										class="block w-full border-purple-500 text-purple-900 border  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="password"
										placeholder="Enter Password"
									/>
								</div>
							</div>
							<div class="flex flex-wrap -mx-3 mb-2">
								<div class="w-full  px-3 ">
									<label class="block  tracking-wide text-purple-900 text-sm font-bold mb-2" for="grid-first-name">
										Re-Enter Password
									</label>
									<input
										class="block w-full text-purple-900 border border-purple-500  rounded-md py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-sm placeholder:text-purple-500"
										type="password"
										placeholder="Confirm Password"
									/>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
