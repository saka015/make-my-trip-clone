import { GoArrowSwitch } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../common/Footer";
const Flights = () => {
  return (
    <div className="mt-20 pt-16 bg-white h-[42vh]  mx-24 rounded-xl z-10 ">
      <nav className="flex justify-between mx-1">
        <div className="gap-3">
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          One Way
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          Round Trip
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          Multi City
        </div>
        <div>
          <p>Book International and Domestic Flights</p>
        </div>
      </nav>
      <div className="flex justify-between mx-10 my-3">
        <div className="border p-2 px-4 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>FROM</p>
          <h1 className="font-bold text-3xl mt-2">Delhi</h1>
          <h3>DEL,Delhi Airport India</h3>
        </div>
        <GoArrowSwitch className="text-blue-500 bg-gray-100 rounded-full text-2xl p-1 mt-12" />
        <div className="border p-2 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>TO</p>
          <h1 className="font-bold text-3xl mt-2">Banglore</h1>
          <h3>BLR,Bengaluru International Airport</h3>
        </div>

        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Departure <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-3xl mt-2">
            21 <span>Mar'24</span>{" "}
          </h1>
          <h3>Thursday</h3>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Return <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <p className="text-gray-500 font-semibold w-48">
            Tap to add a return date for bigger discount
          </p>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Travellers & Class{" "}
            <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-3xl mt-2">
            1 <span className="text-normal">Traveller</span>{" "}
          </h1>
          <h3>Economy/Premium Economy</h3>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 mx-4">
          <p>
            Select A <br /> Fare Type :{" "}
          </p>
          <input type="radio" name="fare" />
          Regular <br /> Fares
          <input type="radio" name="fare" />
          Armed Forces
          <br /> Fares
          <input type="radio" name="fare" />
          Students <br /> Fares
          <input type="radio" name="fare" />
          Senior Citizen
          <br /> Fares
          <input type="radio" name="fare" />
          Senior Citizen <br /> Fares
          <input type="radio" name="fare" />
          Doctors & Nurses <br /> Fares
        </div>
        <div className="flex">
          <p>Trending Searches:</p>
          <h4 className="bg-gray-100 p-1 flex mx-2 h-8">
            Dubai <FaLongArrowAltRight className="mt-1 mx-1 text-blue-500" />
            Delhi
          </h4>
          <h4 className="bg-gray-100 p-1 flex mx-2 h-8">
            Delhi <FaLongArrowAltRight className="mt-1 mx-1 text-blue-500" />
            Kolkata
          </h4>
        </div>
      </div>
      <div className="grid items-centers mt-6">
        <button className="mx-auto gradient px-16 text-xl rounded-xl text-white py-2">
          Search
        </button>
      </div>

      <main className="bg-white rounded-xl p-3 mt-8">
        <div className="text-slate-800 rounded-xl px-4 p-2 text-xl font-semibold bg-gray-200  text-center">
          <h1>Explore flights & offers</h1>
        </div>
        <div className="mt-8 grid grid-col-2">
          <div className="card bg-gray-100 rounded-2xl shadow-lg border p-3">
            <div className="flex">
              <img
                src="https://promos.makemytrip.com/notification/xhdpi//desktop-Taj-IHCL-140324.jpg?im=Resize=(134,134)"
                alt=""
              />
              <p className="text-xl mt-2 ml-2 font-semibold">
                Enjoy memorable stays at Taj Hotel
                <p className="text-sm font-normal mt-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  qui?
                </p>
              </p>
            </div>

            {/*  */}
            <div className="flex justify-between mx-6 mt-2">
              <p>T&C's Apply</p>
              <p className="text-blue-500 font-bold">BOOK NOW</p>
            </div>
          </div>
        </div>
        <div className="card bg-gray-100 rounded-2xl shadow-lg border p-3">
          <div className="flex">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//desktop-Taj-IHCL-140324.jpg?im=Resize=(134,134)"
              alt=""
            />
            <p className="text-xl mt-2 ml-2 font-semibold">
              Enjoy memorable stays at Taj Hotel
              <p className="text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                qui?
              </p>
            </p>
          </div>

          {/*  */}
          <div className="flex justify-between mx-6 mt-2">
            <p>T&C's Apply</p>
            <p className="text-blue-500 font-bold">BOOK NOW</p>
          </div>
        </div>
        <div className="card bg-gray-100 rounded-2xl shadow-lg border p-3">
          <div className="flex">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//desktop-Taj-IHCL-140324.jpg?im=Resize=(134,134)"
              alt=""
            />
            <p className="text-xl mt-2 ml-2 font-semibold">
              Enjoy memorable stays at Taj Hotel
              <p className="text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                qui?
              </p>
            </p>
          </div>

          {/*  */}
          <div className="flex justify-between mx-6 mt-2">
            <p>T&C's Apply</p>
            <p className="text-blue-500 font-bold">BOOK NOW</p>
          </div>
        </div>{" "}
        <div className="card bg-gray-100 rounded-2xl shadow-lg border p-3">
          <div className="flex">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//desktop-Taj-IHCL-140324.jpg?im=Resize=(134,134)"
              alt=""
            />
            <p className="text-xl mt-2 ml-2 font-semibold">
              Enjoy memorable stays at Taj Hotel
              <p className="text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                qui?
              </p>
            </p>
          </div>

          {/*  */}
          <div className="flex justify-between mx-6 mt-2">
            <p>T&C's Apply</p>
            <p className="text-blue-500 font-bold">BOOK NOW</p>
          </div>
        </div>{" "}
        <div className="card bg-gray-100 rounded-2xl shadow-lg border p-3">
          <div className="flex">
            <img
              src="https://promos.makemytrip.com/notification/xhdpi//desktop-Taj-IHCL-140324.jpg?im=Resize=(134,134)"
              alt=""
            />
            <p className="text-xl mt-2 ml-2 font-semibold">
              Enjoy memorable stays at Taj Hotel
              <p className="text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                qui?
              </p>
            </p>
          </div>

          {/*  */}
          <div className="flex justify-between mx-6 mt-2">
            <p>T&C's Apply</p>
            <p className="text-blue-500 font-bold">BOOK NOW</p>
          </div>
        </div>
      </main>
      <Footer/>

    </div>
  );
};

export default Flights;
