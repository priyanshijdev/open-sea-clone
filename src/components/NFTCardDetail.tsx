import { useState } from "react"
import './NFTDetail.css';

// This is the component that will be used in your App.js
const App = () => {
  const [selectedCollection, setSelectedCollection] = useState(null)

  // Function to handle clicking on a collection card
  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection)
  }

  // Function to close the detail view
  const handleCloseDetail = () => {
    setSelectedCollection(null)
  }

  return (
    <div className="app">
      {!selectedCollection ? (
        <div className="main-content">
          {/* Your existing code with CategoryTabs, NFTGrid, etc. */}
          <div className="nft-collections-grid">
            {/* This is just one example card that when clicked will show the detail view */}
            <div
              className="collection-card"
              onClick={() =>
                handleCollectionClick({
                  id: 1,
                  name: "ORGNLS by SABET",
                  creator: "SABET",
                  verified: true,
                })
              }
            >
              <div className="card-image">
                {/* Placeholder for the image */}
                <div className="placeholder-image"></div>
              </div>
              <div className="card-info">
                <h3>ORGNLS by SABET</h3>
                <p>Creator: SABET</p>
                <p>Floor Price: &lt;0.01 ETH</p>
              </div>
            </div>
            {/* More collection cards would go here */}
          </div>
        </div>
      ) : (
        <NFTCollectionDetail collection={selectedCollection} onClose={handleCloseDetail} />
      )}
    </div>
  )
}

export default App

