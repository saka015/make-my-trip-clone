// import { GoArrowSwitch } from "react-icons/go";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../common/Footer";
const HomeStay = () => {
  return (
    <div className="mt-20 pt-16 bg-white h-[42vh]  mx-24 rounded-xl z-10 ">
      <nav className="text-semibold flex justify-center">
        <p>Book your ideal Homestay - Villas, Apartments & more.</p>
      </nav>

      <div className="flex justify-between mx-10 my-3">
        <div className="border p-2 px-4 m-2 rounded-lg hover:bg-blue-100 cursor-pointer">
          <p>City,Property Name Or Location</p>
          <h1 className="font-bold text-3xl mt-2">Goa,India</h1>
          <h3>India</h3>
        </div>

        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Check-In <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Select Date{" "}
          </h1>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Check-Out <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Select Date{" "}
          </h1>
        </div>
        <div className="border p-2 m-2 rounded-lg">
          <p className="flex">
            Guests <FaChevronDown className="text-blue-500 mt-1 ml-3" />
          </p>
          <h1 className="font-bold text-gray-400 text-3xl mt-2">
            Add Adults&Children{" "}
          </h1>
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
      <div className="flex justify-center mt-3"></div>
      <div className="grid items-centers mt-14">
        <button className="mx-auto gradient px-16 text-xl rounded-full text-white py-2">
          Search
        </button>
      </div>
      <div className="mt-8 grid grid-cols-4 bg-white rounded-xl p-8 font-bold">
        <p>Mumbai</p>
        <p>Delhi</p>
        <p>Bangalore</p>
        <p>Hyderabad</p>
        <p>Jalandhar</p>
        <p>Ahmedabad</p>
        <p>Chennai</p>
        <p>Kolkata</p>
        <p>Surat</p>
        <p>Pune</p>
        <p>Jaipur</p>
        <p>Lucknow</p>
      </div>
      <div className="mx-3 bg-gray-100  rounded-xl p-3 my-6">
        <h1 className="my-3 font-bold">Products Offering</h1>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam sint reiciendis excepturi deleniti corrupti tempore neque esse odio, iure accusamus. Et officia modi excepturi, ut ad aliquid explicabo temporibus?
        </p>
        <h1 className="my-3 font-bold">Products Offering</h1>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam sint reiciendis excepturi deleniti corrupti tempore neque esse odio, iure accusamus. Et officia modi excepturi, ut ad aliquid explicabo temporibus?
        </p>
        <h1 className="my-3 font-bold">Products Offering</h1>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam sint reiciendis excepturi deleniti corrupti tempore neque esse odio, iure accusamus. Et officia modi excepturi, ut ad aliquid explicabo temporibus?
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi consequatur officiis totam odio eveniet magni adipisci tempore accusantium ipsa, possimus libero deserunt, maxime dolores sunt sapiente in incidunt iure molestiae asperiores eaque obcaecati quod corporis similique! Laboriosam cupiditate cumque inventore assumenda veniam modi recusandae, magni reprehenderit ut non molestias corrupti culpa, quia saepe fuga sed repellat numquam aliquam animi adipisci. Dolores quae maiores nisi dolore sed deserunt minus, dolor voluptatum a rerum, temporibus at ex aspernatur? Exercitationem soluta quis ratione adipisci ex a, dolor est repudiandae! Quidem quo adipisci id repellat, natus esse, perspiciatis dolorum ducimus, voluptatem accusamus sint culpa blanditiis distinctio ad libero expedita totam delectus aut atque qui. Illum similique adipisci velit dolorem sed excepturi modi id at laudantium asperiores deleniti doloremque consequatur est facere incidunt distinctio neque voluptatum ad, ipsam optio. Officiis enim aspernatur iste quaerat exercitationem animi fugiat fugit nulla. Facilis amet ex quos veniam sint laboriosam, voluptate dolor quibusdam esse laudantium cumque omnis placeat non, veritatis voluptates sapiente repudiandae accusamus iure. Saepe aut, nostrum, error tenetur officia molestiae ea provident fugit aperiam dicta quae mollitia odio illo illum rerum veniam vitae rem cum omnis? Atque voluptatum nostrum perferendis at sapiente facere. Assumenda, repellat eum!</p>
      </div>

      <Footer />
    </div>
  );
};

export default HomeStay;
