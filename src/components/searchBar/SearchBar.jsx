import React, { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (value) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input type="number" name="MinPrice" placeholder="Min. Price" />
        <input type="number" name="MaxPrice" placeholder="Max. Price" />
        <button>
          <img src="/search.png" alt="Search Icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
