// import { GoArrowSwitch } from "react-icons/go";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../common/Footer";
const Hotels = () => {
  return (
    <div className="mt-20 pt-16 bg-white h-[42vh]  mx-24 rounded-xl z-10 ">
      <nav className="flex justify-between mx-1">
        <div className="gap-3">
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          Upto 4 rooms
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          Group Deals
          <input className="mx-2 active:font-bold" type="radio" name="trip" />
          Multi City
        </div>
        <div>
          <p>
            Book Domestic and International Property Online. To list your
            property{" "}
            <span className="font-semibold text-blue-500">Click Here</span>{" "}
          </p>
        </div>
      </nav>
      <div className="flex justify-between mx-10 my-3">
        <div className="border p-2 px-4 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>City,Property Name Or Location</p>
          <h1 className="font-bold text-3xl mt-2">Goa</h1>
          <h3>India</h3>
        </div>

        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Check-In <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-3xl mt-2">
            21 <span>Mar'24</span>{" "}
          </h1>
          <h3>Thursday</h3>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Check-Out <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-3xl mt-2">
            22 <span>Mar'24</span>{" "}
          </h1>
          <h3>Friday</h3>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Rooms& Guests <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-3xl mt-2">
            1 <span>Room</span>2 <span>Adults</span>{" "}
          </h1>
          <h3>Friday</h3>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Price Per Night{" "}
            <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <p className="text-gray-500 font-semibold w-48">
            ₹0-₹1500,₹1500-₹2000,₹2000-₹2500,.....
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-center mt-3">
        <div className="flex">
          <p>Trending Searches:</p>
          <h4 className="bg-gray-100 p-1 flex mx-2 h-8">Dubai,UAE</h4>
          <h4 className="bg-gray-100 p-1 flex mx-2 h-8">London,UK</h4>
          <h4 className="bg-gray-100 p-1 flex mx-2 h-8">New York,US</h4>
        </div>
      </div>
      <div className="grid items-centers mt-6">
        <button className="mx-auto gradient px-16 text-xl rounded-full text-white py-2">
          Search
        </button>
      </div>
      <main className="bg-white rounded-xl p-3 mt-8">
        <div className="text-slate-800 rounded-xl px-4 p-2 text-xl font-semibold bg-gray-200  text-center">
          <h1>Explore best Hotels offers</h1>
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
        <div className="bg-white mt-12 rounded-xl p-10 my-12">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam voluptate labore animi consectetur, aut illum veniam quam? Aut culpa sequi corporis error nisi numquam obcaecati. Culpa qui odit explicabo consequuntur ex id voluptates harum voluptatum. Accusantium, reprehenderit sequi. Non, temporibus? Ducimus aperiam at vitae, fugit consectetur voluptatibus magni recusandae.</p>
        <hr />
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident obcaecati libero dignissimos quod, ducimus est. Quibusdam officiis perferendis neque consectetur libero facere nemo reiciendis voluptatem necessitatibus cum, molestias fuga. Eaque, fuga eos dolorem amet, asperiores provident commodi porro dolorum pariatur molestiae tempora numquam doloribus? Ab, quas optio? Laboriosam, sapiente.</p>
        <hr />
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident obcaecati libero dignissimos quod, ducimus est. Quibusdam officiis perferendis neque consectetur libero facere nemo reiciendis voluptatem necessitatibus cum, molestias fuga. Eaque, fuga eos dolorem amet, asperiores provident commodi porro dolorum pariatur molestiae tempora numquam doloribus? Ab, quas optio? Laboriosam, sapiente.</p>
        <hr />
      </div>
      <Footer/>
    </div>
  );
};

export default Hotels;
