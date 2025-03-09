import "./Category.css"

type CategoryTabsProps = {
    categories: string[],
    activeCategory: string,
    setActiveCategory: (category: string) => void
}
const CategoryTabs:React.FC<CategoryTabsProps> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tab ${activeCategory === category ? "active" : ""}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs

