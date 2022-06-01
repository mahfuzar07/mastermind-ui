import React, { Fragment, useState } from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Navbar from '../components/Navbar';

function Home() {
	const [navfix, setNavfix] = useState(false);

	function setFixed() {
		if (window.scrollY >= 80) {
			setNavfix(true);
		} else {
			setNavfix(false);
		}
	}
	window.addEventListener('scroll', setFixed);
	return (
		<Fragment>
			<header className="w-full bg-background bg-cover relative">
				<div className={`sticky top-0  z-10 ${navfix ? 'bg-[#523970]' : ''}`}>
					<Navbar />
				</div>

				<div className="w-full mt-[60px] pb-[80px]  flex justify-center items-center ">
					<div className="max-w-xl p-5 text-center text-white ">
						<div className="w-md text-6xl mb-5 font-semibold">
							<h1>One Platform</h1>
							<h1> All travel Solutions</h1>
						</div>
						<div className="max-w-md  mx-auto text-xl  mb-5">
							<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
						</div>

						<div className="flex items-center justify-center gap-5 flex-wrap">
							<button className="bg-white text-purple-900 px-6 py-2 rounded font-bold">
								<a href="/">Sign Up Now</a>
							</button>

							<button className="border  px-6 py-2 rounded font-bold">
								<a href="/">Learn More</a>
							</button>
						</div>
					</div>
				</div>
				{/* absulate page */}
				<div className="absolute md:inset-x-32 inset-x-5 top-[570px]   md:top-[470px]  rounded-lg shadow-xl bg-white p-3">
					<div className="flex items-center justify-center gap-3 mb-1">
						<AirplanemodeActiveIcon className="bg-blue-500 text-white rounded-md ring-purple-500 ring-2" />
						<h1 className="text-center text-blue-500 font-semibold text-lg">Key Airline Partners</h1>
					</div>
					<div className="w-full flex justify-center md:items-center md:space-x-20 space-x-5 flex-wrap">
						<img src="https://i.pinimg.com/736x/8d/66/86/8d6686bc4ffdb16143dd272b6f3b89dd.jpg" alt="" className="h-[80px] w-[120px] " />
						<img
							src="https://seekvectorlogo.com/wp-content/uploads/2022/01/malaysia-airlines-vector-logo-2022.png"
							alt=""
							className="h-[80px] w-[120px]  "
						/>
						<img
							src="https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-2006-present.jpg"
							alt=""
							className="h-[80px] w-[120px] "
						/>
						<img
							src="https://logos-world.net/wp-content/uploads/2020/03/Turkish-Airlines-Logo.png"
							alt=""
							className="h-[80px] w-[120px]  "
						/>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCr3rRXtf_v9qDBh9FlxYDFEq_FegjN-SimgtJja5nUHFt_s4qgXIBITqJxO1EgdkCCo&usqp=CAU"
							alt=""
							className="h-[80px] w-[120px] "
						/>
					</div>
				</div>
			</header>
			<section className="max-w-6xl mx-auto px-5 md:mt-[150px] mt-[300px]">
				<div className="text-center space-y-2 text-3xl font-bold mb-5">
					<h4 className="text-xl font-semibold">Our Services</h4>
					<h1 className="text-gray-800">Solution For the whole</h1>
					<h1 className=" text-gray-800">Travel Ecosystem</h1>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-3 mt-[80px] text-[#523970]">
					<div class="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-28 h-28 rounded-md"
							src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
							alt="Sunset in the mountains"
						/>
						<div class="px-2 py-3">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-28 h-28 rounded-md"
							src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
							alt="Sunset in the mountains"
						/>
						<div class="px-2 py-3">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-28 h-28 rounded-md"
							src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
							alt="Sunset in the mountains"
						/>
						<div class="px-2 py-3">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class=" text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-28 h-28 rounded-md "
							src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
							alt="Sunset in the mountains"
						/>
						<div class="px-2 py-3">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5 ">
							<a href="/">Learn More</a>
						</button>
					</div>
				</div>
			</section>
			<section className="max-w-6xl mx-auto px-5 my-14">
				<div className="w-full flex justify-between flex-col space-y-5 md:space-x-5 md:flex-row ">
					<div className="flex-2">
						<img
							class="w-full rounded-md "
							src="https://i.pinimg.com/originals/d6/d1/e0/d6d1e0bbdd2eda8f44a2125154670e82.gif"
							alt="Sunset in the mountains"
						/>
					</div>
					<div className="flex flex-col flex-1">
						<div className="text-[#523970]">
							<span className="text-xl font-semibold">Our Coverage area</span>
							<h1 className="text-4xl font-bold mt-5">Global Offices & Representation</h1>
						</div>
						<div className="my-5">
							<li className="grid grid-cols-3 gap-4 text-md text-gray-400 font-semibold">
								<a className="text-[#523970]" href="/">
									Singapore
								</a>
								<a href="/">India</a>
								<a href="/">Bangladesh</a>
								<a href="/">Malaysia</a>
								<a href="/">Thailand</a>
								<a href="/">srilanka</a>
								<a href="/">USA</a>
								<a href="/">UAE</a>
								<a href="/">Turkey</a>
							</li>
						</div>
						<div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-3 text-white rounded-lg">
							<div className="text-sm mb-5">
								<p className="text-lg">mastermind Travel LTD.</p>
								<p>(UEN: 202002910E)</p>
							</div>
							<div className="text-sm">
								<p>100 Tras Street #17-02 100 AM</p>
								<p>Singapore 079027, Singapor</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
