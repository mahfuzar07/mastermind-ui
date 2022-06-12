import React, { Fragment, useState } from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import compassgif from '../images/Compass.gif';
import developer from '../images/Developer.gif';
import note from '../images/Note.gif';
import manager from '../images/Manager.gif';
import wflight from '../images/World Flight.gif';

import tour from '../images/tour.gif';
import search from '../images/Search.gif';
import cost from '../images/Low Cost.gif';
import meesanger from '../images/messanger.gif';

function LandingHome() {
	const [navfix, setNavfix] = useState(false);

	function setFixed() {
		if (window.scrollY >= 70) {
			setNavfix(true);
		} else {
			setNavfix(false);
		}
	}
	window.addEventListener('scroll', setFixed);
	return (
		<Fragment>
			<header className="w-full bg-background bg-no-repeat bg-cover relative ">
				<div className={`z-10 ${navfix ? 'top-0 h-[10%] w-full fixed bg-[#523970]' : ''}`}>
					<Navbar />
				</div>

				<div className="w-full pt-[60px] pb-[80px]  flex justify-center items-center ">
					<div className="max-w-lg p-5 text-center text-white ">
						<div className="w-md text-5xl mb-5 font-semibold">
							<h1 className="mb-2">One Platform</h1>
							<h1> All travel Solutions</h1>
						</div>
						<div className="max-w-md  mx-auto text-md  mb-5">
							<p>We make it easy to plan your travel, automate your expenses and provide valiable insight</p>
						</div>

						<div className="flex items-center justify-center gap-5 flex-wrap">
							<button className="bg-white text-[#523970] px-6 py-2 rounded font-bold">
								<a href="/">Sign Up Now</a>
							</button>

							<button className="border  px-6 py-2 rounded font-bold">
								<a href="/">Learn More</a>
							</button>
						</div>
					</div>
				</div>
				{/* absulate page */}
				<div className="absolute md:inset-x-32 inset-x-5 md:top-[90%] top-[90%] rounded-lg shadow-xl bg-white p-3">
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
			<section className="container mx-auto px-10 md:mt-[10%] mt-[80%]">
				<div className="text-center space-y-2 text-3xl font-bold mb-5 text-[#523970]">
					<h4 className="text-xl font-semibold">Our Services</h4>
					<h1>Solution For the whole</h1>
					<h1>Travel Ecosystem</h1>
				</div>
				<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-3 mt-[80px] text-[#523970]">
					<div className="max-w-sm overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						{/* <div className="w-28 h-28 bg-blue-600 rounded-md flex justify-center items-center">

						</div> */}
						<img className="w-28 h-28 bg-[#6488EA] rounded-md" src={compassgif} alt="Sunset in the mountains" />

						<div className="px-2 py-3">
							<div className="font-bold text-xl mb-2">For Travelers</div>
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div className="max-w-sm overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img className="w-28 h-28 rounded-md bg-[#6488EA] " src={note} alt="Sunset in the mountains" />
						<div className="px-2 py-3 ">
							<div className="font-bold text-xl mb-2">For Organizers</div>
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div className="max-w-sm max-h-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img className="w-28 h-28 rounded-md bg-[#6488EA]" src={developer} alt="Sunset in the mountains" />
						<div className="px-2 py-3 ">
							<div className="font-bold text-xl mb-2">For Developers</div>
							<p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border  px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5">
							<a href="/">Learn More</a>
						</button>
					</div>
					<div className="max-w-sm max-h-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
						<img className="w-28 h-28 rounded-md bg-[#6488EA]" src={manager} alt="Sunset in the mountains" />
						<div className="px-2 py-3 ">
							<div className="font-bold text-xl mb-2">For Managers</div>
							<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
						</div>

						<button className="border max-h-sm   px-5 py-1 text-sm rounded font-bold bg-[#523970] text-white mb-5 ">
							<a href="/">Learn More</a>
						</button>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-10 md:mt-5 mt-10">
				<div className="w-full flex justify-between flex-col space-y-5 md:space-x-24 md:flex-row">
					<div className="flex-2">
						<img className="w-full  rounded-md " src={wflight} alt="Sunset in the mountains" />
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
			<section className="md:w-full py-5   px-10 md:mt-0 mt-5 bg-[#DFF5FD]">
				<div className="container mx-auto px-10">
					<div className="text-center space-y-2 text-3xl font-bold mb-5 text-[#523970]">
						<h4 className="text-xl font-semibold">Why Mastermind</h4>
						<h1>We're the travel platform of</h1>
						<h1>choice for enterprises</h1>
					</div>
					<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-3 mt-[80px] text-[#523970]">
						<div className="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
							<img className="w-28 h-28 rounded-full bg-white" src={tour} alt="Sunset in the mountains" />
							<div className="px-2 py-3">
								<div className="w-[60%] mx-auto font-bold text-lg mb-2">The Best travel option anywhere</div>
								<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
							</div>
						</div>
						<div className="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
							<img className="w-28 h-28 rounded-full bg-white" src={search} alt="Sunset in the mountains" />
							<div className="px-2 py-3">
								<div className="font-bold w-[60%] mx-auto text-lg mb-2">Fast and relevant search result</div>
								<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
							</div>
						</div>
						<div className="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
							<img className="w-28 h-28 rounded-full" src={cost} alt="Sunset in the mountains" />
							<div className="px-2 py-3">
								<div className="w-[60%] mx-auto font-bold text-lg mb-2">Affordable price & deals</div>
								<p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
							</div>
						</div>
						<div className="max-w-sm  overflow-hidden  flex justify-center items-center flex-col text-center mb-5">
							<img className="w-28 h-28 rounded-full bg-white" src={meesanger} alt="Sunset in the mountains" />
							<div className="px-2 py-3">
								<div className="w-[60%] mx-auto font-bold text-lg mb-2">Fast company setup</div>
								<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto px-10 mt-[5%]">
				<h1 className="text-center text-[#523970] font-bold text-xl mb-5">Making Headlines</h1>

				<div className="w-full flex justify-evenly md:items-center md:space-x-30 space-x-10 flex-wrap">
					<img
						src="https://getlogovector.com/wp-content/uploads/2020/11/tech-in-asia-logo-vector.png"
						alt=""
						className="h-[100px] w-[120px] "
					/>
					<img src="https://tbsnews.net/sites/all/themes/sloth/banner.png" alt="" className="h-[100px] w-[120px]  " />

					<img src="https://www.dhakatribune.com/img/dt-1542309875718.jpg" alt="" className="h-[100px] w-[120px] " />

					<img
						src="https://logovectordl.com/wp-content/uploads/2019/12/kaler-kantho-logo-vector.png"
						alt=""
						className="h-[80px] w-[120px]  "
					/>
					<img
						src="https://www.contactdetails247.com/admin/managebussinesscards/bussinesscardlogos/546181blob"
						alt=""
						className="h-[100px] w-[120px] "
					/>
				</div>
			</section>

			<section className="relative md:mt-[20%] mt-[120%] ">
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

export default LandingHome;
