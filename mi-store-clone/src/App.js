import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.js";
import Data from "./data/data.json";
import Offers from "./components/Offers.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={Data.banner.start} />
      <Offers offers={Data.offer} />
    </Router>
  );
}

export default App;
