import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { populerPlace } from '../data/data';
import PublicIcon from '@mui/icons-material/Public';
import { width } from '@mui/system';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'black',
				borderRadius: '50%',
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }} onClick={onClick} />;
}

function FooterSlider() {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="container  mx-auto h-full  rounded-[25px] px-5">
			<Slider {...settings}>
				{populerPlace.map((item, index) => {
					return (
						<div key={index} className="cursor-pointer">
							<div className="w-[370px] p-2 rounded-md overflow-hidden md:ml-3 ml-2 ">
								<img
									className="w-[360px] h-[200px] rounded-md transition duration-700 ease-in-out hover:scale-105"
									src={item.img}
									alt="Sunset in the mountains"
								/>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}

export default FooterSlider;
