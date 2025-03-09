import { useState } from "react";
import "./App.css";
import CategoryTabs from "./components/Category";
import Navbar from "./components/Navbar";
import TrendingSection from "./components/TrendingSection";
import NFTGrid from "./components/NFTGrid";
import { goatImage, kekeImage, memoriesImage, originlImage, savanahImage } from "./assets";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTimeFilter, setActiveTimeFilter] = useState("24h");

  const categories = [
    "All",
    "Art",
    "Gaming",
    "Memberships",
    "PFPs",
    "Photography",
    "Music",
  ];
  
  const nftCollections = [
    {
      id: 1,
      name: "ORGNLS by SABET ",
      creator: "SABET",
      floorPrice: "<0.01 ETH",
      image: originlImage,
      verified: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    },
    {
      id: 2,
      name: "Memories by Neura",
      creator: "Neura",
      floorPrice: "0.11 ETH",
      image: memoriesImage,
      verified: true,
    },
    {
      id: 3,
      name: "savannah",
      creator: "Doma",
      floorPrice: "0.03 ETH",
      image: savanahImage,
      verified: false,
    },
    {
      id: 4,
      name: "GOAT Gaming - Genesis GOATs",
      creator: "GOAT",
      floorPrice: "0.16 ETH",
      image: goatImage,
      verified: true,
    },
    {
      id: 5,
      name: "Exit Vectors by Keke",
      creator: "GOAT",
      floorPrice: "0.16 ETH",
      image: kekeImage,
      verified: true,
    },
    {
      id: 6,
      name: "ORGNLS by SABET ",
      creator: "SABET",
      floorPrice: "<0.01 ETH",
      image: originlImage,
      verified: true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    },
    {
      id: 7,
      name: "savannah",
      creator: "Doma",
      floorPrice: "0.03 ETH",
      image: savanahImage,
      verified: false,
    },
    {
      id: 8,
      name: "GOAT Gaming - Genesis GOATs",
      creator: "GOAT",
      floorPrice: "0.16 ETH",
      image: goatImage,
      verified: true,
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <NFTGrid collections={nftCollections} />
        <TrendingSection
          activeTimeFilter={activeTimeFilter}
          setActiveTimeFilter={setActiveTimeFilter}
        />
      </main>
    </div>
  );
}

export default App;
