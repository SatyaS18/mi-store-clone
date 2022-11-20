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
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";

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
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={Data.hotAccessories.smartDevice}
              smartDeviceCover={Data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={Data.hotAccessories.home}
              homeCover={Data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={Data.hotAccessories.lifeStyle}
              lifeStyleCover={Data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={Data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                Data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="Product Reviews" />
      <ProductReviews productReviews={Data.productReviews} />
      <Heading text="Videos" />
      <Videos videos={Data.videos} />
    </Router>
  );
}

export default App;
