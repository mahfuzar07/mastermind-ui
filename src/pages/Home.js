import React, { Fragment, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import plane from '../images/airplane.png';
import ticket from '../images/plane-ticket.png';
import time from '../images/alarm-clock.png';
import Carousel from '../components/Carousel';
import PackageGalary from '../components/PackageGalary';

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
			<header className="w-full min-h-[550px]  bg-homeBg bg-cover">
				<div className={`z-10 ${navfix ? 'top-0 h-[10%] w-full fixed bg-[#523970]' : ''}`}>
					<Navbar />
				</div>
				<div className="w-full mt-[8%] flex justify-center items-center ">
					<div className="max-w-xl p-5 text-center text-white ">
						<div className="w-md text-5xl mb-5 font-semibold">
							<h1>Travel, Fun, Enjoy</h1>
						</div>
						<div className="max-w-md  mx-auto text-lg  mb-5">
							<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
						</div>
					</div>
				</div>
			</header>
			{/* tab menu section */}
			<section className="container mx-auto w-[85%] mt-[-10%] rounded-lg shadow-xl bg-white px-5 py-10">
				{/* Tab menu*/}
				<div className="py-2 md:py-5 md:w-[60%] md:mt-[-6%] mt-[-20%] w-full mx-auto bg-white rounded-lg shadow-xl">
					<ul className="flex text-[0.8rem] font-medium text-center divide-x divide-gray-500  cursor-pointer ">
						<li onClick={() => maintoggleTab(1)} className={`w-full   ${maintoggleState === 1 ? 'text-[#523970]' : ''}`}>
							<div className="flex justify-center items-center gap-2">
								<img className="w-5 h-5" src={plane} alt="book flight" />
								Book Flight
							</div>
						</li>

						<li onClick={() => maintoggleTab(2)} className={`w-full  ${maintoggleState === 2 ? ' text-[#523970]' : ''}`}>
							<div className="flex justify-center items-center gap-2">
								<img className="w-5 h-5" src={ticket} alt="flight status" />
								Flight status
							</div>
						</li>
						<li onClick={() => maintoggleTab(3)} className={`w-full ${maintoggleState === 3 ? 'text-[#523970]' : ''}`}>
							<div className="flex justify-center items-center gap-2">
								<img className="w-5 h-5" src={time} alt="flight schedule" />
								Flight Schedule
							</div>
						</li>
					</ul>
				</div>
				{/* End tab menu*/}

				{/* main tab 1 */}
				<div className={`${maintoggleState === 1 ? 'visible' : 'hidden'}`}>
					{/* Tab menu 2*/}
					<div className="max-w-sm mx-auto shadow-lg  mt-5 rounded-[40px] overflow-hidden  text-[0.8rem] font-medium">
						<ul className="flex font-medium text-center  rounded-lg divide-x divide-gray-200 shadow cursor-pointer ">
							<li
								onClick={() => toggleTab(1)}
								className={`inline-block p-3 w-full ${toggleState === 1 ? ' bg-[#523970] text-white ' : ''}`}
							>
								One Way
							</li>
							<li
								onClick={() => toggleTab(2)}
								className={` inline-block p-3 w-full  ${toggleState === 2 ? ' bg-[#523970] text-white ' : ''}`}
							>
								Round Trip
							</li>
							<li
								onClick={() => toggleTab(3)}
								className={` inline-block p-3 w-full  ${toggleState === 3 ? ' bg-[#523970] text-white ' : ''}`}
							>
								Multi-City
							</li>
						</ul>
					</div>
					{/* End tab menu 2*/}
					{/* tab content-1 */}

					<div className={`${toggleState === 1 ? 'visible' : 'hidden'}`}>
						<div className="w-full space-y-3 md:space-y-0 mx-auto mt-5 md:flex justify-center flex-col md:flex-row gap-2 flex-wrap">
							<div className="flex flex-col justify-start p-3 md:p-2 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="flyingFrom">
									Flying from
								</label>
								<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-md font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
							</div>

							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Flying to
								</label>
								<input placeholder="Coxs Bazar" className="bg-transparent my-2 outline-none text-lg font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
							</div>

							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Select Date
								</label>
								<input className="bg-transparent my-2 outline-none text-md font-bold" type="date" />
								<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
							</div>

							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<p className="text-[0.8rem]">Passengers & Cabin Class</p>
								<p className="bg-transparent my-2 text-md font-bold"> 4 person </p>

								<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
							</div>
						</div>
					</div>
					{/* End tab content-1 */}
					{/* tab content-2 */}
					<div className={`${toggleState === 2 ? 'visible' : 'hidden'}`}>
						<div className="w-full space-y-3 md:space-y-0 mx-auto mt-5 md:flex justify-center flex-col md:flex-row gap-2 flex-wrap">
							<div className="flex flex-col justify-start p-3 md:p-2 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="flyingto">
									Flying from
								</label>
								<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-md font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
							</div>

							<div className=" flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Flying to
								</label>
								<input placeholder="Coxs Bazar" className="bg-transparent my-2 outline-none text-md font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
							</div>

							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Depart On
								</label>
								<input className="bg-transparent my-2 outline-none text-md font-bold" type="date" />
								<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
							</div>
							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Return On
								</label>
								<input className="bg-transparent my-2 outline-none text-md font-bold" type="date" />
								<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
							</div>
							<div className=" flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<p className="text-[0.8rem]">Passengers & Cabin Class</p>
								<p className="bg-transparent my-2 text-lg font-bold"> 4 person </p>

								<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
							</div>
						</div>
					</div>
					{/* End tab content-2*/}
					{/* tab content-3 */}
					<div className={`${toggleState === 3 ? 'visible' : 'hidden'}`}>
						<div className="w-full space-y-3 md:space-y-0 mx-auto mt-5 md:flex justify-center flex-col md:flex-row gap-2 flex-wrap">
							<div className="flex flex-col justify-start p-3 md:p-2 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="flyingFrom">
									Flying from
								</label>
								<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-lg font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
							</div>

							<div className=" flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Flying to
								</label>
								<input placeholder="Coxs Bazar" className="bg-transparent my-2 outline-none text-md font-bold" type="text" />
								<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
							</div>

							<div className="flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<label className="text-[0.8rem]" htmlFor="">
									Select Date
								</label>
								<input className="bg-transparent my-2 outline-none text-md font-bold" type="date" />
								<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
							</div>
							<div className=" flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
								<p className="text-[0.8rem]">Passengers & Cabin Class</p>
								<p className="bg-transparent my-2 text-md font-bold"> 4 person </p>

								<p className="text-[0.8rem] font-bold"> Bussiness Class</p>
							</div>

							<div className="w-full space-y-3 md:space-y-0 mx-auto mt-5 md:flex justify-center flex-col md:flex-row gap-2 flex-wrap">
								<div className="flex flex-col justify-start p-3 md:p-2 border rounded-md text-[#523970]">
									<label className="text-[0.8rem]" htmlFor="flyingFrom">
										Flying from
									</label>
									<input placeholder="Dhaka" className="bg-transparent my-2  outline-none text-md font-bold" type="text" />
									<p className="text-[0.8rem] font-bold"> Hazrat shahjalal Airport</p>
								</div>

								<div className=" flex flex-col justify-start p-3 md:p-1 border rounded-md text-[#523970]">
									<label className="text-[0.8rem]" htmlFor="">
										Flying to
									</label>
									<input placeholder="Coxs Bazar" className="bg-transparent my-2 outline-none text-lg font-bold" type="text" />
									<p className="text-[0.8rem] font-bold"> Cox'x Bazar Airport</p>
								</div>

								<div className="flex flex-col justify-start p-2 md:p-1 border rounded-md text-[#523970]">
									<label className="text-[0.8rem]" htmlFor="">
										Select Date
									</label>
									<input className="bg-transparent my-2 outline-none text-md font-bold" type="date" />
									<p className="text-[0.8rem] font-bold"> 2022, Wednesday</p>
								</div>
								<div className="w-[170px] flex justify-center items-center p-3 md:p-1 ">
									<button className="bg-[#523970] text-white px-8 py-2 rounded-md">Add City</button>
								</div>
							</div>
						</div>
					</div>
					{/* End tab content-3*/}
				</div>
				{/* End main tab 1 */}
				{/* search button */}
				<div className="flex justify-center items-center">
					<button className="bg-[#523970] text-white px-5 py-2 rounded-lg md:mb-[-7%] mb-[-25%]">Search Flight</button>
				</div>
				{/* End search button */}
			</section>

			<section className="container px-10 mx-auto mt-20">
				<div className="text-center my-5 text-3xl font-bold text-[#523970]">Popular Places</div>
				<Carousel />
			</section>
			<section className="container px-10  mx-auto mt-10">
				<div className="text-center my-5 text-3xl font-bold text-[#523970]">Popular Packages</div>
				<PackageGalary />
			</section>

			<section className="">
				<Footer />
			</section>
		</Fragment>
	);
}

export default Home;
