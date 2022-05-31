import React, { Fragment } from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<Fragment>
			<header className="w-full bg-background bg-cover relative">
				<div className="sticky top-0 z-10">
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
				<div className="absolute md:inset-x-32 inset-x-5 top-[570px]   md:top-[450px]  rounded-lg shadow-xl bg-white p-3">
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
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-3 mt-[80px] ">
					<div class="max-w-md  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-32 h-32 rounded-md"
							src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
							alt="Sunset in the mountains"
						/>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-6 py-2 rounded font-bold bg-purple-900 text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-md  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-32 h-32 rounded-md"
							src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
							alt="Sunset in the mountains"
						/>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-6 py-2 rounded font-bold bg-purple-900 text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-md  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-32 h-32 rounded-md"
							src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
							alt="Sunset in the mountains"
						/>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-6 py-2 rounded font-bold bg-purple-900 text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div class="max-w-md  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img
							class="w-32 h-32 rounded-md"
							src="https://media.radissonhotels.net/image/metropolitan-hotel-sofia-a-member-of-radisson-individuals/exteriorview/16256-145921-f72742573_3xl.jpg?impolicy=Card&gravity=North"
							alt="Sunset in the mountains"
						/>
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
							<p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-6 py-2 rounded font-bold bg-purple-900 text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default Home;
