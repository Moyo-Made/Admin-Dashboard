import { menuItems } from "../sidebarMenu";
import Upgrade from "../assets/2625766.png";
import { useState } from "react";

const Sidebar = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};
	
	return (
		<div
			className="absolute top-0 left-0 bg-[#5041BC] w-[423px] h-[850px] flex justify-start items-center 
      		mt-8 ml-8 rounded-3xl"
		>
			{/* Logo */}
			<div className="relative -mt-[47rem] ml-10">
				<div className="absolute top-0 left-0 rounded-full bg-[#FF7F57] w-[38px] h-[38px]"></div>
				<div className="absolute top-0 left-4 rounded-full bg-[#FFC629] w-[43px] h-[43px]"></div>
				<span
					className=" absolute top-0 left-6 mt-1 uppercase text-center text-white 
              		font-extrabold text-[24px]"
				>
					Ventes
				</span>
			</div>
			<div className="bg-[#8A7DD0] w-[190px] h-[1px] -mt-[38rem]"></div>

			{/* Menu */}
			<div className=" -ml-44 -mt-[15rem] ">
				<ul className=" text-white font-medium space-y-8">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className={`flex gap-5 px-4 py-2 rounded-md cursor-pointer ${
								activeIndex === index ? "bg-[#ffff] text-[#8A7DD0] font-extrabold" : ""
							}`}
							onClick={() => handleItemClick(index)}
						>
							<img
								src={item.icon}
								alt={item.alt}
								className={`h-4 mt-1 ${
									activeIndex === index ? "text-[#8A7DD0] bg-[#8a7dd0ce] rounded-full" : ""
								}`}
							/>
							<li>{item.label}</li>
						</div>
					))}
				</ul>
			</div>

			{/* Upgrade */}
			<div
				className="flex flex-col justify-center items-center bg-[#ffff] rounded-md
           		w-[150px] h-[190px] -ml-[10rem] mt-[30rem]"
			>
				<img src={Upgrade} alt="Upgrade" className="w-[100px] h-[75px]" />
				<span className="text-sm font-medium">Want to upgrade</span>
				<button className="bg-[#FF8057] hover:scale-105 transition text-white rounded-2xl mt-4 py-1 px-3">
					Upgrade now
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
