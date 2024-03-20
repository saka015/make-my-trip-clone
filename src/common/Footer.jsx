import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full mt-12 flex justify-between p-16 px-16 bg-black text-white">
      <div className="flex justify-between gap-3 text-xl">
        <FaTwitter />
        <FaFacebookSquare />
      </div>
      <div>
        <h1 className="text-xl font-bold">
          2024 © 2024 MAKEMYTRIP PVT. LTD. <br /> Country India USA UAE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
