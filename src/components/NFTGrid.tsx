import "./NFTGrid.css";
import NFTCard from "./NFTCard";
import React, { useState } from "react";

type Collection = {
  id: number; 
  name: string;
  creator: string;
  floorPrice: string;
  image: string;
  verified: boolean;
};

type NFTGridProps = {
  collections: Collection[];
};

const NFTGrid: React.FC<NFTGridProps> = ({ collections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, collections.length - 4)
    );
  };

  return (
    <div className="nft-grid-container">
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        {"<"}
      </button>
      <div className="nft-grid">
        {collections.slice(currentIndex, currentIndex + 4).map((collection) => (
          <NFTCard key={collection.id} collection={collection} />
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex >= collections.length - 4}
      >
        {">"}
      </button>
    </div>
  );
};

export default NFTGrid;
