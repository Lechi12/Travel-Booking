import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CitySearch from "./components/CitySearch"; // Import the CitySearch component
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact"; // Import Contact page
import FlightData from "./pages/FlightData";
import BlogDetail from "./pages/BlogDetail"; // Correct import
import Top10Destinations from "./pages/Top10Destinations"; // correct import
import PackingLightGuide from "./pages/PackingLightGuide"; // Import the new page

const destinationData = [
  {
    id: 1,
    name: "Paris",
    description: "The city of light and love.",
    imageUrl:
      "https://th.bing.com/th/id/R.b20bccc85df58d860daac736eec1d236?rik=zV5zC02ttakwdg&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Tokyo",
    description: "A vibrant city blending tradition and modernity.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3UNi6sxWP60jnYN1J-ysoQHaFZ?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "New York",
    description: "The city that never sleeps.",
    imageUrl:
      "https://content.paulreiffer.com/wp-content/uploads/2014/12/Midtown-New-York-City-Manhattan-Cityscape-Landscape-Photographer-Paul-Reiffer-Empire-State-Building-Rockefeller-Center-Chrysler-South-Sunset-Night-Professional@2x.jpg",
  },
  {
    id: 4,
    name: "London",
    description: "A historic city full of culture and life.",
    imageUrl:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Pictures-Download-Desktop-London-HD-Wallpapers.jpg",
  },
  {
    id: 5,
    name: "Dubai",
    description: "A luxurious city with stunning skyscrapers.",
    imageUrl:
      "https://th.bing.com/th/id/R.266d9c18a3030951e23f825f72cce863?rik=BBHE82ZvXsNYOQ&riu=http%3a%2f%2ffc00.deviantart.net%2ffs71%2fi%2f2013%2f144%2ff%2f7%2fdubai_cityscape_by_csamiano-d66hama.jpg&ehk=%2bIRsfvOG7NOme8BNiV01PZ4ebRmNEvGBys17ifk0%2fQc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 6,
    name: "Rome",
    description: "The Eternal City with rich history.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.JKsR0LFX128U933mShoj-wHaFj?rs=1&pid=ImgDetMain",
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destinations"
          element={<Destinations destinations={destinationData} />}
        />
        <Route
          path="/destinations/:destinationId"
          element={<DestinationDetail />}
        />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/contact" element={<Contact />} />{" "}
        <Route
          path="/blog/5-tips-for-traveling-on-a-budget"
          element={<BlogDetail />}
        />
        <Route
          path="/blog/top-10-destinations-2025"
          element={<Top10Destinations />}
        />
        <Route
          path="/blog/packing-light-guide"
          element={<PackingLightGuide />}
        />
        <Route path="/flight-data" element={<FlightData />} />
        {/* Add Contact route */}
      </Routes>
    </Router>
  );
};

export default App;
