import React from 'react';
import Link from '../data/footer1.json';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
	return (
		<div className="w-full  h-full mt-10 pb-5 bg-[#523970] text-white px-5 rounded-t-lg ">
			<div className="max-w-6xl  mx-auto h-full md:pt-[15%] pt-[30%] mt-10  my-5 text-white ">
				<div className="flex justify-between flex-col md:flex-row gap-5 ">
					{Link &&
						Link.map((item) => {
							return (
								<ul key={item.id}>
									<h1 className="text-lg font-bold mb-2"> {item.name}</h1>

									{item.subname.map((data) => (
										<li className="text-sm mb-1" key={data.id}>
											<a href={data.link}>{data.name}</a>
										</li>
									))}
								</ul>
							);
						})}
				</div>
				{/* footer row 2 */}
				<div className="flex justify-between flex-wrap  flex-col md:flex-row gap-5 my-5  border-b-2">
					<div>
						<h1 className="text-lg font-bold mb-2">mastermind</h1>
						<div className="text-sm">
							<p className="max-w-md mb-1">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, sapiente! Debitis dolor, quidem fugit ut necessitatibus
								accusamus deserunt distinctio iusto.
							</p>
						</div>
						<div className="mb-2 space-x-3 ">
							<FacebookOutlinedIcon fontSize="large" />
							<FacebookOutlinedIcon fontSize="large" />
							<FacebookOutlinedIcon fontSize="large" />
						</div>
					</div>
					<div className="">
						<h1 className="text-lg font-bold mb-2">We Accept Only</h1>
						<div className="text-sm">
							<img
								className="w-full h-10 rounded-md"
								src="https://1.bp.blogspot.com/-tUK62uY5mZ4/YSDZQZa7P6I/AAAAAAAAC_E/rrEtW5Xv7zY8lRQpQfSYJF4h0cZzF-tkQCLcBGAsYHQ/s1614/YouTube%2Bvideo%2Bboostpromotion%2Bbuy%2BViews%2Blow%2Bprice%2Bin%2BBangladesh%2Bget%2B10%2525%2Bfree.png"
								alt="Sunset in the mountains"
							/>
						</div>
					</div>
				</div>

				<div className="text-sm my-3 text-center">
					<span>@ Mastermind Tours and Travels. All right reserved </span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
