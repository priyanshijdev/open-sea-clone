import React from "react";
import "./NFTCard.css";

type Collection = {
  image?: string;
  name: string;
  verified?: boolean;
  creator: string;
  floorPrice: string;
};

type NFTCardProps = {
  collection: Collection;
};

const NFTCard: React.FC<NFTCardProps> = ({ collection }) => {
  return (
    <div className="nft-card">
      <div className="nft-image">
        <img
          src={collection.image || `https://via.placeholder.com/300x300?text=${collection.name}`}
          alt={collection.name}
        />
      </div>
      <div className="nft-info">
        <div className="nft-title">
          <h3>{collection.name}</h3>
          {collection.verified && (
            <span className="verified-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </span>
          )}
        </div>
        <p className="nft-creator">by {collection.creator}</p>
        <p className="nft-price">Floor: {collection.floorPrice}</p>
      </div>
    </div>
  );
};

export default NFTCard;
