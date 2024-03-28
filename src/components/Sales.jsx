import Scale from "../assets/Path 5.png";
import SalesScale from "../assets/Group 5.png";
import Background from "../assets/Mask group (4).png";
import ArrowUp from "../assets/Group 14 (2).png";
import RateScale from "../assets/Rectangle 266 (1).png";
import SalesRep1 from "../assets/Bitmap Copy 3.png";
import SalesRep2 from "../assets/Bitmap Copy 2.png";
import SalesRep3 from "../assets/Bitmap (8).png";
import NumberOfOtherReps from "../assets/Group 57.png";
import SalesIcon from "../assets/Group 11.png";

const Sales = () => {
	return (
		<div className="flex justify-start items-start shadow-md">
			<div
				className="absolute left-0 mt-28 ml-10 w-[585px] h-[283px] 
				shadow-md border border-[#D3CBFB] rounded-2xl"
			>
				<div className="flex justify-start items-center gap-44">
					<span className="text-[16px] text-[#04103B] font-bold ml-6 mt-3">
						Claims Over the Years
					</span>

					<div className="flex gap-4">
						<div className="flex justify-end items-center gap-1 mt-3">
							<div className="w-[10px] h-[10px] bg-[#EA8F95] rounded-full"></div>
							<span className="text-[14px] font-bold text-[#EA8F95]">
								Approved
							</span>
						</div>

						<div className="flex justify-end items-center gap-1 mt-3">
							<div className="w-[10px] h-[10px] bg-[#5041BC] rounded-full"></div>
							<span className="text-[14px] font-bold text-[#5041BC]">
								Submitted
							</span>
						</div>
					</div>
				</div>
				<div className="flex ml-8 gap-4">
					<ol className=" text-[#5041BC] text-[16px] font-medium space-y-2 mt-4">
						<li>50</li>
						<li>40</li>
						<li>30</li>
						<li>20</li>
						<li>10</li>
						<li>0</li>
					</ol>
					<img src={Scale} alt="Scale" className="w-[470px] h-[175px] mt-4" />
				</div>
				<div className="-mt-44">
					<img
						src={SalesScale}
						alt="Sales scale"
						className="w-[500px] h-[175px] ml-14"
					/>
				</div>
				<div className="ml-[4.2rem] space-x-10 text-[#5041BC] text-[16px] font-medium">
					<span>2015</span>
					<span>2016</span>
					<span>2017</span>
					<span>2018</span>
					<span>2019</span>
					<span>2020</span>
				</div>
			</div>

			<div
				className="absolute right-0 mt-28 w-[330px] h-[283px] rounded-2xl
				 mr-8 bg-[#7353D0] shadow-2xl shadow-[#4533C9]"
			>
				<div className="w-full h-full absolute inset-0 mix-blend-multiply">
					<img
						src={Background}
						alt="Background design"
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className="flex relative z-10">
					<div className="flex flex-col text-white mt-4 ml-4">
						<span className="text-[16px] font-semibold">Sales team target</span>
						<span className="font-black text-[34px]">82%</span>
						<span className="text-[16px] font-semibold">Achieved</span>
					</div>
					<div className="flex ">
						<img
							src={SalesRep1}
							alt="Sales rep"
							className="absolute left-36 mt-8 -ml-8 w-[60px] h-[60px]"
						/>
						<img
							src={SalesRep2}
							alt="Sales rep"
							className="absolute left-44 mt-8 -ml-8  w-[60px] h-[60px]"
						/>
						<img
							src={SalesRep3}
							alt="Sales rep"
							className="absolute left-52 mt-8 -ml-8 w-[60px] h-[60px]"
						/>
						<img
							src={NumberOfOtherReps}
							alt="No of other reps"
							className="absolute left-[15.4rem] mt-9 -ml-8 w-[45px] h-[45px]"
						/>

						<img
							src={SalesIcon}
							alt="Sales Icon"
							className="absolute left-[19.4rem] mt-9 -ml-9 w-[45px] h-[45px]"
						/>
					</div>
				</div>

				<div className="flex relative z-10 flex-col text-white mt-8 ml-4">
					<span className="text-[14px] font-semibold">Cleared Qeue</span>
					<span className="font-black text-[34px]">1.4k</span>
					<div className="flex gap-3">
						<span className="text-[14px] font-semibold">No. of Bills</span>
						<img
							src={ArrowUp}
							alt="Arrow up"
							className="w-[19px] h-[19px] shadow-sm"
						/>
						<span className="text-[15px] font-bold -ml-2">+15%</span>

						<img
							src={RateScale}
							alt="Rate scale"
							className="-mt-12 w-[120px] h-[60px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sales;
