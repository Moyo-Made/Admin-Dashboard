import Search from "../assets/Fill 2.png";
import Notification from "../assets/Notification.png";
import ProfileImg from "../assets/Profile icon.png";
import DropdownIcon from "../assets/Path 2.png";
import Representatives from "./Representatives";
import Metrics from "./Metrics";
import Sales from "./Sales";

const Dashboard = () => {
	return (
		<div
			className="relative flex justify-start items-center w-[1000px] h-[850px] 
			bg-[#ffff] ml-[18rem] mt-8 rounded-3xl shadow-md"
		>
			{/* Header */}
			<div className="flex justify-center items-center absolute top-0 ml-10 mt-1 cursor-pointer">
				<span className="text-[29px] font-bold">Overview</span>

				{/* Search bar */}
				<div className="flex mt-1 ml-40">
					<input
						type="search"
						name=""
						id="search"
						placeholder="Search"
						className="bg-[#F5F3FF] text-[#5041BC] text-md w-[350px] h-[35px] focus:outline-none px-3 rounded-2xl"
					/>
					<img
						src={Search}
						alt="Search icon"
						className="-ml-8 w-[18px] h-[18px] mt-2"
					/>
				</div>

				{/* Notification */}
				<img src={Notification} alt="Notification icon" className="ml-10" />

				{/* Profile */}
				<div className="flex ml-10">
					<img src={ProfileImg} alt="Profile image" />
					<span className="text-[#54657E] ml-2 mt-1">Danielle Campbell</span>
					<img
						src={DropdownIcon}
						alt="Dropdown Icon"
						className="mt-3 ml-5 h-[6px] w-[8px] cursor-pointer"
					/>
				</div>
			</div>

			<Representatives />
			<Metrics />
			<Sales />
		</div>
	);
};

export default Dashboard;
