import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.js";
import Data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={Data.banner.start} />
      <Offers offers={Data.offer} />
      <Heading text="Star Products" />
      <StarProduct starProduct={Data.starProduct} />
      <Heading text="Hot Accessories" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={Data.hotAccessories.music}
              musicCover={Data.hotAccessoriesCover.music}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
