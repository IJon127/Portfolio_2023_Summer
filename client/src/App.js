import { Route, Routes } from "react-router-dom";

import Header from "./components/layouts/header/Header.jsx";
import Work from "./components/sections/work/Work.jsx";

import PagesHome from "./components/pages/PagesHome.jsx";
import PagesWorks from "./components/pages/PagesWorks.jsx";
import PagesAbout from "./components/pages/PagesAbout.jsx";
import PagesContact from "./components/pages/PagesContact.jsx";
import PagesWork from "./components/pages/PagesWork.jsx";

import "./App.css";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(/ui/background.svg)` }}>
      <Header />
      <Routes>
        <Route index element={<PagesHome />} />
        <Route path="/contact" element={<PagesContact />} />
        <Route path="/works" element={<PagesWorks />} />
        <Route path="/about" element={<PagesAbout />} />
        <Route path="/:workName" element={<PagesWork />} />
      </Routes>
    </div>
  );
}

export default App;
