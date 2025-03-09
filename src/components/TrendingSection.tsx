import { useState } from "react"
import "./TrendingSection.css"

type TrendingSectionProps = {
    activeTimeFilter: string,
    setActiveTimeFilter: (timeFilter: string) => void
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ activeTimeFilter, setActiveTimeFilter }) => {
  const [activeTab, setActiveTab] = useState("Trending")

  const timeFilters = ["1h", "6h", "24h", "7d"]

  return (
    <div className="trending-section">
      <div className="trending-header">
        <div className="trending-tabs">
          <button
            className={`trending-tab ${activeTab === "Trending" ? "active" : ""}`}
            onClick={() => setActiveTab("Trending")}
          >
            Trending
          </button>
          <button className={`trending-tab ${activeTab === "Top" ? "active" : ""}`} onClick={() => setActiveTab("Top")}>
            Top
          </button>
        </div>

        <div className="trending-filters">
          <div className="time-filters">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                className={`time-filter ${activeTimeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="chain-filter">
            <button className="chain-dropdown">
              All chains
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          <button className="view-all-button">View all</button>
        </div>
      </div>

      <div className="trending-table">
        <div className="trending-table-header">
          <div className="table-cell rank-cell">Rank</div>
          <div className="table-cell collection-cell">Collection</div>
          <div className="table-cell price-cell">Floor Price</div>
          <div className="table-cell volume-cell">Volume</div>
        </div>

        {/* Table content would go here */}
        <div className="trending-table-content">{/* This would be populated with actual data */}
        </div>
      </div>
    </div>
  )
}

export default TrendingSection

