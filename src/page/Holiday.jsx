// import { GoArrowSwitch } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../common/Footer";
const Holiday = () => {
  return (
    <div className="mt-20  bg-white h-[42vh]  mx-24 rounded-xl z-10 ">
      <nav className="text-semibold flex justify-between rounded-xl bg-blue-100 px-8 text-xl p-2">
        <div className="bg-blue-100 pt-16">
          <p className="flex-end bg-blue-100 text-blue-400 font-bold flex">
            <CiSearch className="mt-1 mx-1 font-bold" /> Search
          </p>
        </div>
        <div className="bod px-4 bg-blue-100 pt-16">
          <p className="flex-end bg-blue-100  font-bold">Honeymoon</p>
        </div>
        <div className="bod px-4 bg-blue-100 pt-16">
          <p className="flex-end bg-blue-100  font-bold">Explore Europe</p>
        </div>
        <div className="bod px-4 bg-blue-100 pt-16">
          <p className="flex-end bg-blue-100  font-bold">Villas</p>
        </div>

        <div className="bod px-4 bg-blue-100 pt-16">
          <p className="flex-end bg-blue-100  font-bold">
            Unexplored Destinations
          </p>
        </div>
      </nav>

      <div className="flex justify-between mx-10 my-3">
        <div className="border p-2 px-4 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>From City</p>
          <h1 className="font-bold text-3xl mt-2">New Delhi</h1>
          <h3>India</h3>
        </div>
        <div className="border p-2 px-4 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>To City/Country/Category</p>
          <h1 className="font-bold text-3xl mt-2">Goa</h1>
        </div>

        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Departure <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Select Date{" "}
          </h1>
        </div>

        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Rooms&Guests <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Select Rooms{" "}
          </h1>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Filters <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Select Filters <br /> (Optional){" "}
          </h1>
        </div>
      </div>
      <div className=" ">
        <p className="float-right mx-6">Holiday Packages</p>
      </div>

      {/*  */}
      <div className="flex justify-center mt-3"></div>
      <div className="grid items-centers mt-8">
        <button className="mx-auto gradient px-16 text-xl rounded-full text-white py-2">
          Search
        </button>
      </div>
      <main className="bg-white p-24 mt-16 rounded-2xl">
        <img
          src="https://promos.makemytrip.com/images/summer-holidays-tb-dt-051223.webp"
          alt=""
        />

        <div className="bg-gray-100 my-8 p-4">
          <h1 className="font-bold text-xl">
            Travel ka SEASON SALE: Up to 30% off on Holiday Packages Use Code:
            TRAVELSEASON
          </h1>
          <div className="grid grid-cols-4 p-6">
            <div className="p-4 rounded-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1554357475-accb8a88a330?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>

          <div className="rounded-xl bg-white my-6 p-6">
            <h1 className="font-bold text-2xl">International Destinations!</h1>
            <div className="gap-4 grid grid-cols-4 p-6">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1527151977613-a89904713c47?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h3>Europe</h3>
                <p>Starting at ₹1200</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1527151977613-a89904713c47?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h3>Europe</h3>
                <p>Starting at ₹1200</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1527151977613-a89904713c47?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h3>Europe</h3>
                <p>Starting at ₹1200</p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1527151977613-a89904713c47?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <h3>Europe</h3>
                <p>Starting at ₹1200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4">
          <h1 className="my-3 font-bold ">Internationals</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, impedit voluptatem accusamus sapiente velit quo quibusdam dolorem hic esse ducimus eligendi qui? Voluptates sapiente vero qui reprehenderit vel voluptatum repellat rerum, sint et odit ipsam laboriosam explicabo aperiam ratione ipsa magnam, ullam laborum! Assumenda magni impedit, dolore eum voluptatum sequi ipsum eveniet reprehenderit earum aliquam quod maxime deserunt quisquam alias voluptates pariatur dicta possimus minus, in quo quae excepturi necessitatibus! Ex deserunt velit porro itaque in consequatur obcaecati temporibus ipsam fuga nesciunt voluptatum cupiditate, sapiente blanditiis sunt assumenda neque a veritatis excepturi illum consequuntur asperiores incidunt quidem iste omnis! Eum deserunt, blanditiis inventore maxime quam quia id nihil veritatis nisi cum illo repellendus. Deleniti eveniet quas, aperiam incidunt nam sequi doloribus, provident illo delectus tempora consequuntur ad maiores sint ex adipisci eius enim obcaecati doloremque, facilis voluptatum. Sed fugiat, inventore illum ullam voluptatem labore possimus maiores fugit blanditiis quo. Minus.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h1 className="my-3 font-bold ">Domestic</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, impedit voluptatem accusamus sapiente velit quo quibusdam dolorem hic esse ducimus eligendi qui? Voluptates sapiente vero qui reprehenderit vel voluptatum repellat rerum, sint et odit ipsam laboriosam explicabo aperiam ratione ipsa magnam, ullam laborum! Assumenda magni impedit, <hr /> dolore eum voluptatum sequi ipsum eveniet reprehenderit earum aliquam quod maxime deserunt quisquam alias voluptates pariatur dicta possimus minus, in quo quae excepturi necessitatibus! Ex deserunt velit porro itaque in consequatur obcaecati temporibus ipsam fuga nesciunt voluptatum cupiditate, sapiente blanditiis sunt assumenda neque a veritatis excepturi illum consequuntur asperiores incidunt quidem iste omnis! Eum deserunt, blanditiis inventore maxime quam quia id nihil veritatis nisi cum illo repellendus. Deleniti eveniet quas, aperiam incidunt nam sequi doloribus, provident illo delectus tempora consequuntur ad maiores sint ex adipisci eius enim obcaecati doloremque, facilis voluptatum. Sed fugiat, inventore illum ullam voluptatem labore possimus maiores fugit blanditiis quo. Minus.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, impedit voluptatem accusamus sapiente velit quo quibusdam dolorem hic esse ducimus eligendi qui? Voluptates sapiente vero qui reprehenderit vel voluptatum repellat rerum, sint et odit ipsam laboriosam explicabo aperiam ratione ipsa magnam, ullam laborum! Assumenda magni impedit, dolore eum voluptatum sequi ipsum eveniet reprehenderit earum aliquam quod maxime deserunt quisquam alias voluptates pariatur dicta possimus minus, in quo quae excepturi necessitatibus! Ex deserunt velit porro itaque in <hr /> consequatur obcaecati temporibus ipsam fuga nesciunt voluptatum cupiditate, sapiente blanditiis sunt assumenda neque a veritatis excepturi illum consequuntur asperiores incidunt quidem iste omnis! Eum deserunt, blanditiis inventore maxime quam quia id nihil veritatis nisi cum illo repellendus. Deleniti eveniet quas, aperiam incidunt nam sequi doloribus, provident illo delectus tempora consequuntur ad maiores sint ex adipisci eius enim obcaecati doloremque, facilis voluptatum. Sed fugiat, inventore illum ullam voluptatem labore possimus maiores fugit blanditiis quo. Minus.</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Holiday;
