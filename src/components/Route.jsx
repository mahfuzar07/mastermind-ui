import React from 'react';
import { route } from '../data/data';
import plane from '../images/airplane.png';
function Route() {
	return (
		<div className="mt-10 grid md:grid-cols-3 lg:grid-cols-4  gap-5 ">
			{route.map((route, index) => {
				return (
					<a key={index} href="/">
						<div className="w-[280px] hover:shadow-xl p-2 rounded-lg bg-gray-200">
							<div className="flex justify-between px-5 py-2 items-center">
								<img className="w-10 h-10" src={plane} alt="" />
								<div className="text-[#523970]">
									<p className="text-sm">
										<span>{route.loc1}</span> - <span>{route.loc2}</span>
									</p>
									<span>
										From <strong> BDT {route.fare}</strong>
									</span>
								</div>
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
}

export default Route;
