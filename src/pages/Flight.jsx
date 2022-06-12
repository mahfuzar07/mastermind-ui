import React from 'react';
import Navbar from '../components/Navbar';
function Flight() {
	return (
		<div>
			<section className="top-0 h-[10%] w-full fixed bg-[#523970]">
				<Navbar />
			</section>
			<section className="md:pt-[5%] pt-[15%] bg-gray-100">
				<div className="w-full space-y-3 md:space-y-0 mx-auto mt-5 md:flex justify-center flex-col md:flex-row gap-2 flex-wrap px-2">
					<div className="flex flex-col justify-start p-3 md:p-1 border border-[#523970] rounded-md text-[#523970]">
						<p className="text-[0.8rem] mb-2" htmlFor="flyingFrom">
							from
						</p>
						<p className="text-md font-bold "> Dhaka</p>
						<p className="text-[0.8rem]"> Hazrat shahjalal Airport</p>
					</div>

					<div className="flex flex-col justify-start p-3 md:p-1 border border-[#523970] rounded-md text-[#523970]">
						<p className="text-[0.8rem] mb-2">To</p>

						<p className="text-md font-bold"> Cox'x Bazar</p>
						<p className="text-[0.8rem]"> Cox'x Bazar Airport</p>
					</div>

					<div className="flex flex-col justify-start p-3 md:p-1 border border-[#523970] rounded-md text-[#523970]">
						<p className="text-[0.8rem] mb-2">Journey Date</p>
						<p className="text-md font-bold">31st March, 2022</p>
						<p className="text-[0.8rem]">Wednesday</p>
					</div>

					<div className="flex flex-col justify-start p-3 md:p-1 border border-[#523970] rounded-md text-[#523970]">
						<p className="text-[0.8rem] mb-2">Passengers & Cabin Class</p>
						<p className="text-md font-bold"> 4 person </p>
						<p className="text-[0.8rem]"> Bussiness Class</p>
					</div>
					<div className="flex justify-center items-center border rounded-md  text-white bg-[#523970]">
						<button className="px-5 py-2">Modify Search </button>
					</div>
				</div>
				<div className="mt-10 pb-3 text-[#523970] flex text-center text-sm font-semibold justify-center items-center gap-5">
					<p>
						Total Operator Found: <span>05</span>
					</p>
					<p>
						Total Flight Found: <span>105</span>
					</p>
					<p>
						Total Seats Found: <span>466</span>
					</p>
				</div>
			</section>
		</div>
	);
}

export default Flight;
