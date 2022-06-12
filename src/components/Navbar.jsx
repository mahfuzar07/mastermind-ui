import { React, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
	let Links = [
		{ name: 'Home', link: '/home' },
		{ name: 'landing Page', link: '/' },
		{ name: 'Flight Page', link: '/flight' },
		{ name: 'Contact us', link: '/' },
	];

	let [open, setOpen] = useState(false);
	return (
		<nav className="md:flex items-baseline justify-around text-white py-2 md:px-10 px-5">
			<div className="font-bold text-3xl">
				<a href="/">mastermind</a>
			</div>

			<div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden">
				{open ? <CloseIcon className="text-white/75" /> : <MenuIcon className="text-white/75" />}
			</div>

			<ul
				className={`md:flex md:items-center bg-white md:bg-inherit  md:pb-0 pb-12 absolute md:static text-black md:text-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto mt-4 md:pl-0 pl-5 transition-all duration-500 ease-in-out ${
					open ? 'right-19' : 'hidden'
				}`}
			>
				{Links.map((link) => (
					<li key={link.name} className="md:ml-8  md:my-0 my-7">
						<Link to={link.link} className="duration-500 ">
							{link.name}
						</Link>
					</li>
				))}
				<li className="md:hidden my-3">
					{/* <a href="/">Login</a> */}
					<Link to="login">Login</Link>
				</li>
				<li className="md:hidden">
					<Link to="signup">Create An Account</Link>
					{/* <a href="/">Create An Account</a> */}
				</li>
			</ul>

			<div className="hidden md:flex md:items-center md:justify-between md:gap-5 ">
				<button className="border px-2 rounded mr-8">
					<a href="/">En</a>
				</button>

				<button className="">
					<Link to="/login">Login</Link>
				</button>

				<button className="bg-white text-purple-900 px-5 py-1 rounded font-bold">
					<Link to="/signup">Sign Up</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
