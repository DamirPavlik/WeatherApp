import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PlaceDashboard from "../pages/PlaceDashboard";
import SideBar from "./SideBar";
import History from "../pages/History";

const Layout = () => {
  return (
    <div className="flex p-[30px] h-screen">
      <div className="w-1/12">
        <SideBar />
      </div>
      <div className="w-11/12">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/place/:slug" element={<PlaceDashboard />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Layout;
