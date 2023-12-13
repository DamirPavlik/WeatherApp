import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import SideBar from "./components/SideBar";
import { Home, Place, History } from "./pages";

const App = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-12 gap-4 p-[30px] h-screen">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-11">
          <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/place/:slug" element={<Place />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
