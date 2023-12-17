import { IoSearch, IoCardOutline, IoMenu  } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { FaGithub, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import { TbFolder } from "react-icons/tb";
import { CgPaypal } from "react-icons/cg";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import { SlScreenSmartphone } from "react-icons/sl";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
import RadialSeparators from "../components/RadialSeparators";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

export const lineOptions = {
  responsive: true,

  aspectRatio: 1.5,
  plugins: {
    // legend: {
    //   position: 'top' as const,
    // },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const lineLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

export const lineData = {
  lineLabels,
  datasets: [
    {
      label: "Dataset 1",
      data: [400, 100, 140, 200, 300, 200, 120],
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 218, 10)",
      backgroundColor: "rgb(255, 218, 10)",
    },
    // {
    //   label: 'Dataset 2',
    //   data: [400, 100, 140, 200, 900, 800, 720],
    //   // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export const donutOptions = {
  responsive: true,

  aspectRatio: 1.5,
  plugins: {
    legend: {
      display: false,
      // position: 'top' as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export const donutData = {
  labels: ["Electronc", "Fashion", "Decor", "Sports"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        // 'rgba(75, 192, 192, 0.2)',
        "rgba(153, 102, 255, 0.2)",
        // 'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        // 'rgba(75, 192, 192, 1)',
        "rgba(153, 102, 255, 1)",
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Total Revenue",
    },
  },
  responsive: true,
  // maintaniAspectRatio: false,
  aspectRatio: 1.5,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "2021",

      barThickness: 8,
      data: [-200, -500, -100, -800, -300, -200, -400],
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(118, 182, 255)",
      borderRadius: 8,
    },
    {
      label: "2022",
      barThickness: 8,
      data: [400, 100, 140, 200, 900, 800, 720],
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: "rgb(0, 106, 226)",
      borderRadius: 8,
    },
    // {
    //   label: 'Dataset 3',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   backgroundColor: 'rgb(53, 162, 235)',
    // },
  ],
};


function HomePage({ setShowMenu } : {setShowMenu: React.Dispatch<React.SetStateAction<boolean>>}): void {
  function handleMenuButtonClick():void{
    setShowMenu(true)
  }
 
  return (
    <div className=" h-[140%] py-4 px-4 grid grid-rows-[12] gap-4">
      <div className=" row-span-1 px-2 py-3 bg-white rounded-md flex items-center justify-between">
        <div className=" w-2/3 flex items-center">
          <button onClick={handleMenuButtonClick} className=" px-1 mr-1 bg-slate-600 rounded-md md:hidden text-2xl text-slate-100"><IoMenu /></button>
          <IoSearch />
          <input
            className=" w-1/2 ml-1 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className=" w-24  flex items-center justify-between">
          <TbBell />
          <FaGithub />
          <MdOutlineWbSunny />
          <div className=" w-4 h-4 bg-blue-700 rounded-2xl"></div>
        </div>
      </div>
      <div className=" row-span-2 grid grid-cols-6 gap-4 ">
        <div className=' col-span-6 md:col-span-4 px-3 pt-6 rounded-md bg-white md:bg-[url("/man_with_laptop.png")] bg-contain bg-no-repeat bg-right-bottom flex flex-col justify-center'>
          <h3 className=" mb-5 text-2xl text-indigo-400 font-semibold">
            Congratulations John! &#127881;
          </h3>
          <p className=" text-slate-500 text-sm font-medium">
            You have done 72% &#129321; more sales today.
            <br />
            Check your new raising badge in your profile
          </p>
          <button className=" w-36 mt-4 mb-2 py-1 rounded-md bg-indigo-600/20 text-sm text-indigo-400/80 font-semibold">
            View Badges
          </button>
        </div>
        <div className=" col-span-3 md:col-span-1 p-5 rounded-md flex flex-col justify-evenly bg-white">
          <div className=" w-full flex justify-between">
            <div className=" p-2 bg-lime-300/50 rounded">
              <AiOutlinePieChart className=" text-lime-600" />
            </div>
            <HiDotsVertical />
          </div>
          <div className="flex flex-col">
            <div className="text-slate-400 text-sm font-medium">Profit</div>
            <h3 className=" text-xl text-slate-500 font-medium">$12,628</h3>
          </div>
          <div className=" text-sm text-lime-600 flex items-center">
            {" "}
            <FaArrowUp /> 72.8%
          </div>
        </div>
        <div className=" col-span-3 md:col-span-1 p-5 rounded-md flex flex-col justify-evenly bg-white">
          <div className=" w-full flex justify-between">
            <div className=" p-2 bg-sky-300/50 rounded">
              <TbFolder className=" text-sky-600" />
            </div>
            <HiDotsVertical />
          </div>
          <div className="flex flex-col">
            <div className="text-slate-400 text-sm font-medium">Sales</div>
            <h3 className=" text-xl text-slate-500 font-medium">$4,679</h3>
          </div>
          <div className=" text-sm text-lime-600 flex items-center">
            {" "}
            <FaArrowUp />
            28.42%
          </div>
        </div>
      </div>
      <div className=" row-span-4 grid grid-cols-6 gap-4">
        <div className=" col-span-6 md:col-span-4 rounded-md bg-white md:flex justify-center">
          <div className=" md:w-3/5 h-1/2 md:h-auto border-b md:border-b-0 md:border-r border-slate-400 flex md:flex-col justify-center">
            <Bar options={options} data={data} />
          </div>
          <div className=" p-4 md:w-2/5 flex flex-col justify-between items-center">
            <div>2023</div>
            <div className=" h-20 w-20 md:h-28 md:w-28">
              <CircularProgressbarWithChildren
                circleRatio={0.7}
                value={78}
                text={`${78}%`}
                strokeWidth={10}
                counterClockwise={true}
                styles={buildStyles({
                  strokeLinecap: "butt",
                })}
              >
                <RadialSeparators
                  count={60}
                  style={{
                    background: "#fff",
                    width: "2px",
                    // This needs to be equal to props.strokeWidth
                    height: `${10}%`,
                  }}
                />
              </CircularProgressbarWithChildren>
            </div>
            <div>62% Company Growth</div>
            <div className=" w-full mt-3 flex justify-center gap-20 md:gap-4">
              <div className=" flex just items-stretch">
                <div className=" p-2 bg-indigo-300/50 rounded align-middle">
                  <BsCurrencyDollar className=" text-indigo-500" />
                </div>

                <div className=" pl-1">
                  <div className=" text-xs">2023</div>
                  <h4 className=" text-sm font-medium">$32.5k</h4>
                </div>
              </div>
              <div className=" flex just items-stretch">
                <div className=" p-2 bg-sky-300/50 rounded align-middle">
                  <BiWallet className=" text-sky-500" />
                </div>

                <div className=" pl-1">
                  <div className=" text-xs">2022</div>
                  <h4 className=" text-sm font-medium">$41.2k</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-6 md:col-span-2 grid grid-cols-2 gap-4">
          <div className=" col-span-1 p-5 rounded-md flex flex-col justify-evenly bg-white">
            <div className=" w-full flex justify-between">
              <div className=" p-2 bg-red-300/50 rounded">
                <CgPaypal className=" text-red-500" />
              </div>
              <HiDotsVertical />
            </div>
            <div className="flex flex-col">
              <div className="text-slate-400 text-sm font-medium">Payments</div>
              <h3 className=" text-xl text-slate-500 font-medium">$2,468</h3>
            </div>
            <div className=" text-sm text-red-400 flex items-center">
              <FaArrowDown /> -14.82%
            </div>
          </div>
          <div className=" col-span-1 p-5 rounded-md flex flex-col justify-evenly bg-white">
            <div className=" w-full flex justify-between">
              <div className=" p-2 bg-indigo-300/50 rounded">
                <IoCardOutline className=" text-indigo-600" />
              </div>
              <HiDotsVertical />
            </div>
            <div className="flex flex-col">
              <div className="text-slate-400 text-sm font-medium">
                Transactions
              </div>
              <h3 className=" text-xl text-slate-500 font-medium">$14,857</h3>
            </div>
            <div className=" text-sm text-lime-600 flex items-center">
              {" "}
              <FaArrowUp />
              28.14%
            </div>
          </div>
          <div className=" col-span-2 p-5 rounded-md flex justify-between bg-white">
            <div className=" flex flex-col justify-between">
              <div className=" w-full flex flex-col justify-between">
                <div className=" font-medium">Profile Report</div>
                <div className=" w-20 px-1 bg-yellow-300/30 rounded text-yellow-500 text-sm font-medium text-center">
                  Year 2022
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" text-sm text-lime-600 flex items-center">
                  <FaArrowUp /> 72.8%
                </div>
                <h3 className=" text-xl text-slate-500 font-medium">$12,628</h3>
              </div>
            </div>
            <div className=" w-2/3 ">
              <Line options={lineOptions} data={lineData} />
            </div>
          </div>
        </div>
      </div>
      <div className=" row-span-5 pb-4 grid grid-cols-6 gap-4">
        <div className=" col-span-6 md:col-span-2 p-3 rounded-md bg-white">
          <div className=" flex justify-between">
            <h3>Order Statistics</h3>
            <HiDotsVertical />
          </div>
          <h4>42.82k Total Sales</h4>
          <div className=" flex justify-between">
            <div>
              <h3>8,258</h3>
              <h5>Total Orders</h5>
            </div>
            <div className=" h-24 w-24">
              <Doughnut options={donutOptions} data={donutData} />
            </div>
          </div>
          <div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Electronic</h4>
                  <h5 className=" text-xs">Mobile, Earbuds, TV</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">82.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Fashion</h4>
                  <h5 className=" text-xs">Tshirt, Jeans</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">23.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Decor</h4>
                  <h5 className=" text-xs">Dining</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">865</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Sports</h4>
                  <h5 className=" text-xs">Football, Cricket Kit</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">99</h3>
            </div>
          </div>
        </div>
        <div className=" col-span-6 md:col-span-2 p-3 rounded-md bg-white">
          <div className=" flex justify-between">
            <h3>Order Statistics</h3>
            <HiDotsVertical />
          </div>
          <h4>42.82k Total Sales</h4>
          <div className=" flex justify-between">
            <div>
              <h3>8,258</h3>
              <h5>Total Orders</h5>
            </div>
            <div className=" h-24 w-24">
              <Doughnut options={donutOptions} data={donutData} />
            </div>
          </div>
          <div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Electronic</h4>
                  <h5 className=" text-xs">Mobile, Earbuds, TV</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">82.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Fashion</h4>
                  <h5 className=" text-xs">Tshirt, Jeans</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">23.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Decor</h4>
                  <h5 className=" text-xs">Dining</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">865</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Sports</h4>
                  <h5 className=" text-xs">Football, Cricket Kit</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">99</h3>
            </div>
          </div>
        </div>
        <div className=" col-span-6 md:col-span-2 p-3 rounded-md bg-white">
          <div className=" flex justify-between">
            <h3>Order Statistics</h3>
            <HiDotsVertical />
          </div>
          <h4>42.82k Total Sales</h4>
          <div className=" flex justify-between">
            <div>
              <h3>8,258</h3>
              <h5>Total Orders</h5>
            </div>
            <div className=" h-24 w-24">
              <Doughnut options={donutOptions} data={donutData} />
            </div>
          </div>
          <div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Electronic</h4>
                  <h5 className=" text-xs">Mobile, Earbuds, TV</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">82.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Fashion</h4>
                  <h5 className=" text-xs">Tshirt, Jeans</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">23.5k</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Decor</h4>
                  <h5 className=" text-xs">Dining</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">865</h3>
            </div>
            <div className=" flex  justify-between">
              <div className="flex items-center">
                <div className=" mr-1 p-2 bg-indigo-300/50 rounded">
                  <SlScreenSmartphone className=" text-indigo-500" />
                </div>
                <div>
                  <h4 className=" text-sm font-medium">Sports</h4>
                  <h5 className=" text-xs">Football, Cricket Kit</h5>
                </div>
              </div>
              <h3 className=" text-sm text-slate-500 font-semibold">99</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
