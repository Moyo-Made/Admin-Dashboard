import CartIcon from "../assets/Group 69.png";
import RateIcon from "../assets/Bitmap (5).png";
import Claim from "../assets/Bitmap (6).png";
import Customer from "../assets/Bitmap (7).png";
import ArrowUp from "../assets/Group 14.png";
import ArrowDown from "../assets/Group 14 (1).png";

const Metrics = () => {
	return (
		<div className="flex justify-center items-center mt-14 ml-10 gap-4">
			{/* Product sold */}
			<div
				className="bg-[#ffff] border border-[#D3CBFB] w-[220px] h-[130px] 
				rounded-2xl shadow-sm"
			>
				<div className="flex">
					<div className="flex flex-col justify-start items-start mt-5 ml-6">
						<span className="text-[14px] font-semibold text-[#797D8C]">
							Products sold
						</span>
						<span className="font-bold text-[30px] text-[#04103B]">25.1k</span>
					</div>
					<div className="flex ml-14 mt-7">
						<img
							src={CartIcon}
							alt="Cart icon"
							className=" w-[22px] h-[29px]"
						/>
					</div>
				</div>
				<div className="flex ml-6 gap-1">
					<img
						src={ArrowUp}
						alt="Arrow up"
						className="w-[19px] h-[19px] shadow-sm"
					/>
					<span className="text-[15px] text-[#6AD2A0] font-bold">+15%</span>
					<span className="underline ml-7 text-[#5041BC] text-[14px] font-semibold cursor-pointer">
						View Report
					</span>
				</div>
			</div>

			{/*Total Profit */}
			<div
				className="bg-[#ffff] border border-[#D3CBFB] w-[220px] h-[130px] 
				rounded-2xl shadow-sm"
			>
				<div className="flex">
					<div className="flex flex-col justify-start items-start mt-5 ml-6">
						<span className="text-[14px] font-semibold text-[#797D8C]">
							Total Profit
						</span>
						<span className="font-bold text-[30px] text-[#04103B]">
							$2,435k
						</span>
					</div>
					<div className="flex ml-8 mt-7">
						<img
							src={RateIcon}
							alt="Rate icon"
							className=" w-[22px] h-[25px]"
						/>
					</div>
				</div>
				<div className="flex ml-6 gap-1">
					<img
						src={ArrowDown}
						alt="Arrow up"
						className="w-[21px] h-[21px] shadow-sm"
					/>
					<span className="text-[15px] text-[#EA8F95] font-bold -mt-[0.09rem]">
						-3.5%
					</span>
					<span className="underline ml-7 text-[#5041BC] text-[14px] font-semibold cursor-pointer">
						View Report
					</span>
				</div>
			</div>

			{/* Total No. of Claim */}
			<div
				className="bg-[#ffff] border border-[#D3CBFB] w-[220px] h-[130px] 
				rounded-2xl shadow-sm"
			>
				<div className="flex">
					<div className="flex flex-col justify-start items-start mt-5 ml-6">
						<span className="text-[14px] font-semibold text-[#797D8C]">
							Total No. of Claim
						</span>
						<span className="font-bold text-[30px] text-[#04103B]">3.5M</span>
					</div>
					<div className="flex ml-8 mt-7">
						<img src={Claim} alt="Claim icon" className=" w-[22px] h-[25px]" />
					</div>
				</div>
				<div className="flex ml-6 gap-1">
					<img
						src={ArrowUp}
						alt="Arrow up"
						className="w-[19px] h-[19px] shadow-sm"
					/>
					<span className="text-[15px] text-[#6AD2A0] font-bold">+15%</span>
					<span className="underline ml-8 text-[#5041BC] text-[14px] font-semibold cursor-pointer">
						View More
					</span>
				</div>
			</div>

			{/* New customers */}
			<div
				className="bg-[#ffff] border border-[#D3CBFB] w-[220px] h-[130px] 
				rounded-2xl shadow-sm"
			>
				<div className="flex">
					<div className="flex flex-col justify-start items-start mt-5 ml-6">
						<span className="text-[14px] font-semibold text-[#797D8C]">
							New Costumer
						</span>
						<span className="font-bold text-[30px] text-[#04103B]">43.5k</span>
					</div>
					<div className="flex ml-8 mt-4">
						<img
							src={Customer}
							alt="Customer icon"
							className=" w-[35px] h-[35px]"
						/>
					</div>
				</div>
				<div className="flex ml-6 gap-1">
					<img
						src={ArrowUp}
						alt="Arrow up"
						className="w-[19px] h-[19px] shadow-sm"
					/>
					<span className="text-[15px] text-[#6AD2A0] font-bold">+10%</span>
					<span className="underline ml-8 text-[#5041BC] text-[14px] font-semibold cursor-pointer">
						View More
					</span>
				</div>
			</div>
		</div>
	);
};

export default Metrics;
