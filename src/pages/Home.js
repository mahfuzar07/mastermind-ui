import React, { Fragment, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
	const [navfix, setNavfix] = useState(false);

	function setFixed() {
		if (window.scrollY >= 70) {
			setNavfix(true);
		} else {
			setNavfix(false);
		}
	}
	window.addEventListener('scroll', setFixed);

	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (tabIndex) => {
		setToggleState(tabIndex);
	};
	const [maintoggleState, setmainToggleState] = useState(1);
	const maintoggleTab = (mainTabindex) => {
		setmainToggleState(mainTabindex);
		console.log(mainTabindex);
	};

	return (
		<Fragment>
			<header className="w-full min-h-[550px] bg-homeBg bg-cover relative">
				<div className={`z-10 ${navfix ? 'top-0 h-[10%] w-full fixed bg-[#523970]' : ''}`}>
					<Navbar />
				</div>

				<div className="w-full mt-[60px] pb-[80px]  flex justify-center items-center ">
					<div className="max-w-xl p-5 text-center text-white ">
						<div className="w-md text-6xl mb-5 font-semibold">
							<h1>Travel, Fun, Enjoy</h1>
						</div>
						<div className="max-w-md  mx-auto text-xl  mb-5">
							<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
						</div>
					</div>
				</div>
				{/* absulate page */}
				<div className="max-w-6xl mx-auto absolute  inset-x-5 md:top-[70%] top-[60%] rounded-lg shadow-xl bg-white">
					<div className="rounded-[25px]  bg-white/90 relative">
						<div className="py-10">
							<div className="w-full mx-auto shadow-lg py-2 absolute  md:top-[-10%] top-[-5%] bg-white rounded-lg">
								{/* Tab menu*/}
								<div className="max-w-sm mx-auto shadow-lg  mt-2 rounded-[40px] overflow-hidden  text-sm font-medium">
									<ul class="flex text-sm font-medium text-center  rounded-lg divide-x divide-gray-200 shadow cursor-pointer ">
										<li
											onClick={() => maintoggleTab(1)}
											className={`inline-block p-2 w-full transition  duration-600 ease-out  ${
												maintoggleState === 1 ? 'border-b-[#523970] text-[#523970] border-2' : ''
											}`}
										>
											Book Flight
										</li>
										<li
											onClick={() => maintoggleTab(2)}
											className={`inline-block p-2 w-full transition  duration-600 ease-out  ${
												maintoggleState === 2 ? 'border-b-[#523970] text-[#523970] border-2' : ''
											}`}
										>
											Flight status
										</li>
										<li
											onClick={() => maintoggleTab(3)}
											className={`inline-block p-2 w-full transition  duration-600 ease-out ${
												maintoggleState === 3 ? 'border-b-[#523970] text-[#523970] border-2' : ''
											}`}
										>
											Flight Schedule
										</li>
									</ul>
								</div>
								{/* End tab menu*/}
							</div>
							{/* Tab menu 2*/}
							<div className="max-w-sm mx-auto shadow-lg  mt-2 rounded-[40px] overflow-hidden  text-sm font-medium">
								<ul class="flex text-sm font-medium text-center  rounded-lg divide-x divide-gray-200 shadow cursor-pointer ">
									<li
										onClick={() => toggleTab(1)}
										className={`inline-block p-4 w-full transition  duration-600 ease-out delay-100 ${
											toggleState === 1 ? ' bg-[#523970] text-white ' : ''
										}`}
									>
										One Way
									</li>
									<li
										onClick={() => toggleTab(2)}
										className={` inline-block p-4 w-full transition  duration-600 ease-out delay-100 ${
											toggleState === 2 ? ' bg-[#523970] text-white ' : ''
										}`}
									>
										Round Trip
									</li>
									<li
										onClick={() => toggleTab(3)}
										className={` inline-block p-4 w-full transition  duration-600 ease-out delay-100 ${
											toggleState === 3 ? ' bg-[#523970] text-white ' : ''
										}`}
									>
										Multi-City
									</li>
								</ul>
							</div>
							{/* End tab menu 2*/}

							{/* main tab 1 */}
							<div className={`${maintoggleState === 1 ? 'visible' : 'hidden mt-5'}`}>
								{/* tab content-1 */}
								<div
									className={`max-w-6xl mx-auto mt-5 flex justify-center flex-col md:flex-row gap-2 flex-wrap ${
										toggleState === 1 ? 'visible' : 'hidden'
									}`}
								>
									<div className="ml-2 rounded-md  border flex flex-col md:flex-row gap-2 md:divide-x text-[#523970]">
										<div className="md:w-[250px] flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" htmlFor="">
												Flying from
											</label>
											<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-lg font-bold" type="text" />
											<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
										</div>
										<div className="md:w-[250px] flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" for="">
												Flying to
											</label>
											<input
												placeholder="Coxs Bazar"
												className="bg-transparent my-2 outline-none text-lg font-bold"
												type="text"
											/>
											<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
										</div>
									</div>

									<div className="md:w-[250px] ml-2 flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
										<label className="text-[0.8rem]" for="">
											Select Date
										</label>
										<input className="bg-transparent my-2 outline-none text-lg font-bold" type="date" />
										<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
									</div>
									<div className="md:w-[250px] ml-2 flex flex-col justify-start p-3 md:p-1  border rounded-md text-[#523970]">
										<p className="text-[0.8rem]">Passengers & Cabin Class</p>
										<p className="bg-transparent my-2 text-lg font-bold"> 4 person </p>

										<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
									</div>
								</div>
								{/* End tab content-1 */}
								{/* tab content-2 */}
								<div
									className={`max-w-6xl mx-auto mt-5 flex justify-center flex-col md:flex-row gap-1 flex-wrap ${
										toggleState === 2 ? 'visible' : 'hidden'
									}`}
								>
									<div className="ml-2 md:ml-0 rounded-md  border flex flex-col md:flex-row gap-1 md:divide-x text-[#523970]">
										<div className="flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" htmlFor="">
												Flying from
											</label>
											<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-lg font-bold" type="text" />
											<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
										</div>
										<div className="flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" htmlFor="">
												Flying to
											</label>
											<input
												placeholder="Coxs Bazar"
												className="bg-transparent my-2 outline-none text-lg font-bold"
												type="text"
											/>
											<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
										</div>
									</div>
									<div className="ml-2 md:ml-0 rounded-md  border flex flex-col md:flex-row gap-2 md:divide-x text-[#523970]">
										<div className="flex flex-col justify-start p-3 md:p-1 text-sm font-medium">
											<label className="text-[0.8rem]" htmlFor="">
												Select Date
											</label>
											<input className="bg-transparent my-2 outline-none text-lg font-bold" type="date" />
											<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
										</div>
										<div className="flex flex-col justify-start p-3 md:p-1 text-sm font-medium ">
											<label className="text-[0.8rem]" htmlFor="">
												Select Date
											</label>
											<input className="bg-transparent my-2 outline-none text-lg font-bold" type="date" />
											<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
										</div>
									</div>

									<div className="ml-2 md:ml-0 flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
										<label className="text-[0.8rem]" htmlFor="">
											Passengers & Cabin Class
										</label>
										<span className="bg-transparent my-2 outline-none text-lg font-bold">1 Person</span>

										<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
									</div>
								</div>
								{/* End tab content-2*/}
								{/* tab content-3 */}
								<div
									className={`max-w-6xl mx-auto mt-5 flex justify-center flex-col md:flex-row gap-2 flex-wrap  ${
										toggleState === 3 ? 'visible' : 'hidden'
									}`}
								>
									<div className="rounded-md  border flex flex-col md:flex-row gap-2 md:divide-x text-[#523970]">
										<div className="md:w-[250px] flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" htmlFor="">
												Flying from
											</label>
											<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-lg font-bold" type="text" />
											<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
										</div>
										<div className="md:w-[250px] flex flex-col justify-start p-3 md:p-1">
											<label className="text-[0.8rem]" for="">
												Flying to
											</label>
											<input
												placeholder="Coxs Bazar"
												className="bg-transparent my-2 outline-none text-lg font-bold"
												type="text"
											/>
											<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
										</div>
									</div>
									<div className="md:w-[250px] ml-2 flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
										<label className="text-[0.8rem]" for="">
											Select Date
										</label>
										<input className="bg-transparent my-2 outline-none text-lg font-bold" type="date" />
										<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
									</div>
									<div className="md:w-[250px] ml-2 flex flex-col justify-start p-3 md:p-1  border rounded-md text-[#523970]">
										<p className="text-[0.8rem]">Passengers & Cabin Class</p>
										<p className="bg-transparent my-2 text-lg font-bold"> 4 person </p>

										<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
									</div>
								</div>

								{/* End tab content-3*/}
							</div>
							{/* End main tab 1 */}

							{/* main tab 2 */}
							<div className={`${maintoggleState === 2 ? 'visible' : 'hidden mt-5'}`}>
								<div className="max-w-6xl w-full mx-auto mt-5 flex justify-center flex-col md:flex-row gap-2 flex-wrap ">No Item</div>
							</div>
							{/* End main tab 2 */}
							{/* main tab 3 */}
							<div className={`${maintoggleState === 3 ? 'visible' : 'hidden mt-5'}`}>
								<div className="max-w-6xl w-full mx-auto mt-5 flex justify-center flex-col md:flex-row gap-2 flex-wrap ">No Item</div>
							</div>
							{/* End main tab 3 */}
						</div>
						<div className="text-center text-white absolute md:top-[90%] top-[97%] inset-x-5">
							<button className="bg-[#523970] py-2 px-6 hover:bg-[#614a7c] rounded-xl">Search Flight</button>
						</div>
					</div>
				</div>
			</header>

			<section className="relative  md:mt-[30%] mt-[250%]">
				<div className="absolute md:inset-x-24 inset-x-5 md:top-[-30%] top-[-45%] rounded-lg bg-footerBg bg-cover h-[55%]">
					<div className="flex flex-col w-full  h-full justify-center items-center text-white">
						<h1 className="max-w-lg mx-auto text-5xl text-center mt-10 font-bold leading-tight">
							Let's make the travel experience amaing together.
						</h1>
						<button className="bg-white px-5 py-2 my-10 rounded font-bold text-[#523970]">
							<a href="/">Sign Up Now</a>
						</button>
					</div>
				</div>

				<Footer />
			</section>
		</Fragment>
	);
}

export default Home;
