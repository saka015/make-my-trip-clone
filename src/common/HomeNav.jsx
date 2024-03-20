import { Link } from "react-router-dom";
import logo from "../assets/logo_make.png";
const HomeNav = () => {
  return (
    <div className="flex justify-between">
      <Link to="/flights">
        <img className="scale-[0.5]" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default HomeNav;

// //       <div className="flex">
//         <div className="flex">
//           <CiHome className=" text-black bg-yellow-400 p-2" />
//           <div>
//             <p className="font-bold text-white">List Your Property</p>
//             <p className="text-sm text-gray-200">Start earning today!</p>
//           </div>
//         </div>
//         <div className="flex biz">
//           <IoBag className=" text-red-400 p-2" />
//           <div>
//             <p className="font-bold text-white">Introducing myBiz</p>
//             <p className="text-sm text-white">Business Travel Solution</p>
//           </div>
//         </div>
//         <div className="flex">
//           <BsFillSuitcaseFill className=" text-yellow-600 p-2" />
//           <div>
//             <p className="font-bold text-white">My Trips</p>
//             <p className="text-sm text-white">Manage your bookings</p>
//           </div>
//         </div>
//         {/*  */}

//         <div>
//           <button className="gradient">
//             <span className="text-blue-400 bg-white p-1">my</span>
//             <p className="text-white text-sm">Login or Create Account</p>
//             <FaChevronDown className="mt-1" />
//           </button>
//           <button className="flex">
//             <img className="scale-[0.06]" src={india} alt="india_alt" />
//             <p className="text-white text-sm">IN|ENG|INR</p>
//             <FaChevronDown className="mt-1" />
//           </button>
//         </div>
//       </div>
