// import logo from "./logo.svg";
import "./main-page.css";
import Header from "./Header";
import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureHhouse from "./featured-house";
function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  return (
    <Router>
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
    </div>
    <Routes>
    <Route path="/" element={<FeatureHhouse house={featuredHouse} />} />
    </Routes>
    </Router>
    
  );
}

export default App;
