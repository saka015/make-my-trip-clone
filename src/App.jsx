import HomeNav from "./common/HomeNav";
import Navbar from "./common/Navbar";
import Flights from "./page/Flights";
import Hotels from "./page/Hotels";
import HomeStay from "./page/HomeStay";
import Holiday from "./page/Holiday";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HomeNav />
        <Navbar />
        <Routes>
          <Route path="/flights" element={<Flights />} />
          <Route path="/home" element={<HomeStay />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
