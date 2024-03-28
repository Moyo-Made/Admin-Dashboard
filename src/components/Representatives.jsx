import Profile1 from "../assets/Bitmap.png";
import Profile2 from "../assets/Bitmap (1).png";
import Profile3 from "../assets/Bitmap (4).png";
import Profile4 from "../assets/Bitmap (2).png";
import MenuIcon from "../assets/Group 73.png";

const Representatives = () => {
	return (
		<div className="absolute top-16 ml-10">
			<span className="font-bold text-[16px]">Top Sales Representatives</span>

			{/* Profile 1 */}
			<div className="flex justify-start text-start items-center gap-[4.8rem] w-[920px] h-[50px] border border-[#EBE8FF] rounded-xl shadow-sm mt-5">
				<img src={Profile1} alt="Profile image" className="ml-8 rounded-full" />
				<span className="-ml-10 text-[16px] text-[#797D8C] font-semibold">
					Nicholas Patrick
				</span>
				<span className="text-[16px] text-[#04103B] font-extrabold">
					$ 2540.58
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					150 Products
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					105 Premium
				</span>
				<span className="-ml-5 text-[14px] text-[#F7941D] font-semibold">
					+Gold
				</span>
				<img
					src={MenuIcon}
					alt="Menu Icon"
					className="ml-[0.45rem] cursor-pointer"
				/>
			</div>

			{/* Profile 2 */}
			<div className="flex justify-start items-center gap-[4.8rem] w-[920px] h-[50px] border border-[#EBE8FF] rounded-xl shadow-sm mt-5">
				<img src={Profile2} alt="Profile image" className="ml-8 rounded-full" />
				<span className="-ml-10 text-[16px] text-[#797D8C] font-semibold">
					Cordell Edwards
				</span>
				<span className="-ml-1 text-[16px] text-[#04103B] font-extrabold">
					$ 1567.80
				</span>
				<span className="ml-1 text-[14px] text-[#797D8C] font-semibold">
					95 Products
				</span>
				<span className="ml-1 text-[14px] text-[#797D8C] font-semibold">
					60 Premium
				</span>
				<span className="-ml-3 text-[14px] text-[#43BE83] font-semibold">
					+Silver
				</span>
				<img src={MenuIcon} alt="Menu Icon" className="cursor-pointer" />
			</div>

			{/* Profile 3 */}
			<div className="flex justify-start items-center gap-[4.8rem] w-[920px] h-[50px] border border-[#EBE8FF] rounded-xl shadow-sm mt-5">
				<img src={Profile3} alt="Profile image" className="ml-8 rounded-full" />
				<span className="-ml-10 text-[16px] text-[#797D8C] font-semibold">
					Derrick Spencer
				</span>
				<span className="ml-1 text-[16px] text-[#04103B] font-extrabold">
					$ 1640.26
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					120 Products
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					75 Premium
				</span>
				<span className="-ml-3 text-[14px] text-[#43BE83] font-semibold">
					+Silver
				</span>
				<img src={MenuIcon} alt="Menu Icon" className="cursor-pointer" />
			</div>

			{/* Profile 4 */}
			<div className="flex justify-start items-center gap-[4.8rem] w-[920px] h-[50px] border border-[#EBE8FF] rounded-xl shadow-sm mt-5">
				<img src={Profile4} alt="Profile image" className="ml-8 rounded-full" />
				<span className="-ml-10 text-[16px] text-[#797D8C] font-semibold">
					Larissa Burton
				</span>
				<span className="ml-3 text-[16px] text-[#04103B] font-extrabold">
					$ 2340.58
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					120 Products
				</span>
				<span className="text-[14px] text-[#797D8C] font-semibold">
					99 Premium
				</span>
				<span className="-ml-3 text-[14px] text-[#F7941D] font-semibold">
					+Gold
				</span>
				<img
					src={MenuIcon}
					alt="Menu Icon"
					className="ml-[0.45rem] cursor-pointer"
				/>
			</div>
		</div>
	);
};

export default Representatives;
