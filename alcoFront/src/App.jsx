import { Footer } from "flowbite-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
function App() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  document.body.classList.add(
    "antialiased",
    "text-slate-500",
    "dark:text-slate-400",
    "bg-white",
    "dark:bg-slate-900"
  );
  return (
    <>
      <nav className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="max-w-7xl mx-auto">
          <div className="p-5 flex flex-row justify-between items-center">
            <div className="logo">
              <h2 className="text-2xl text-white font-bold">ALCHO</h2>
            </div>
            <div className="flex flex-row gap-5">
              <a href="" className="text-sm text-blue-500">
                Home
              </a>
              <a href="" className="text-sm text-white">
                GitHub
              </a>
              <a href="" className="text-sm text-white">
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-5 gap-5 flex flex-col">
        <header className="mb-10 md:flex md:items-start">
          <div className="flex-auto max-w-4xl">
            <p className="mb-0 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400 md:mb-4">
              FredisCool
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              Welcome to Alcho
            </h1>
          </div>
        </header>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-600 tracking-tight dark:text-slate-200">
              Select Your Gender
            </h2>
            <div className="flex max-w-md gap-4 flex-row" id="toggle-sex">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sex"
                  value="Female"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Female
                </span>
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="sex"
                  value="Male"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Male
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="kg"
              className="text-xl sm:text-2xl font-extrabold text-slate-600 tracking-tight dark:text-slate-200"
            >
              Your Weight
            </label>
            <input
              type="text"
              id="kg"
              className="   text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              placeholder="Enter your weight in kg"
              required
            ></input>
          </div>
        </section>

        <section id="selction">
          <div className="w-full h-full bg-slate-500 grid grid-cols-3 rounded-lg text-white p-5">
            <div className="flex flex-col justify-center items-center gap-1 mx-3 my-2  bg-blue-400 rounded-lg">
              <p>Beer</p>
              <img src="../src/img/icons/beer.png" alt="" className="w-10" />
              <span className="text-sm font-bold">5+</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 mx-3 my-2  bg-blue-400 rounded-lg">
              <p>Beer</p>
              <img src="../src/img/icons/beer.png" alt="" className="w-10" />
              <span className="text-sm font-bold">5+</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 mx-3 my-2  bg-blue-400 rounded-lg">
              <p>Beer</p>
              <img src="../src/img/icons/beer.png" alt="" className="w-10" />
              <span className="text-sm font-bold">5+</span>
            </div>
          </div>
        </section>
        <section id="chartSection">
          <Line data={data} options={options} />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
