import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "./Search.css"

// Simulating a database of products for suggestion
const productDatabase = [
  "Apple iPhone 13",
  "Samsung Galaxy S21",
  "Google Pixel 6",
  "MacBook Pro",
  "Dell XPS 13",
  "Sony WH-1000XM4 Headphones",
  "Samsung Galaxy Watch 4",
  "Fitbit Charge 5",
  "Sony PlayStation 5",
  "Xbox Series X",
  "Nike Air Jordans"
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Load search history from localStorage when the component mounts
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  // Update localStorage whenever searchHistory changes
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Handle input change and filter suggestions
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value) {
      const filteredSuggestions = productDatabase.filter((product) =>
        product.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle form submission (adding search query to search history)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    setSearchHistory((prevHistory) => {
      const updatedHistory = [searchQuery, ...prevHistory.filter(item => item !== searchQuery)];
      return updatedHistory.slice(0, 5); // Keep only the latest 5 searches
    });

    setSearchQuery("");
    setSuggestions([]);
  };

  const navigate = useNavigate();
  // Handle clicking on a suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion); // Set search query to the clicked suggestion
    navigate('/product');

    // Update search history
    setSearchHistory((prevHistory) => {
      const updatedHistory = [suggestion, ...prevHistory.filter(item => item !== suggestion)];
      return updatedHistory.slice(0, 5); // Keep only the latest 5 searches
    });

    setSuggestions([]); // Hide suggestions after a click
  };

  // Handle clicking on a history item
  const handleHistoryClick = (historyItem) => {
    setSearchQuery(historyItem);
    setSuggestions([]);
  };

  // Handle clearing the search history
  const handleClearHistory = () => {
    setSearchHistory([]); // Clear the history state
    localStorage.removeItem("searchHistory"); // Remove from localStorage
  };

  return (
    <div className="flex-col justify-start items-center p-2 h-full w-full overflow-auto">
      <div className="bg-white p-7 rounded-lg shadow-md w-full text-center mb-5">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="Search for products..."
            className="p-2 w-4/5 mb-5 border-solid border-[#ccc] rounded-s"
          />
          <button className="bg-[#091057] rounded-md p-2 m-2 w-max text-white" type="submit">Search</button>
        </form>

        <div>
          <span className="text-2xl">Recent Searches</span>
          <ul>
            {searchHistory.length > 0 ? (
              searchHistory.map((item, index) => (
                <li key={index} onClick={() => handleHistoryClick(item)}>
                  {item}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-400" >No search history</p>
            )}
          </ul>
          {searchHistory.length > 0 && (
            <button onClick={handleClearHistory} className="clear-button">
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Suggestions Section */}
      {suggestions.length > 0 && (
        <div className="suggestions">
          <h3>Product Suggestions</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)} // Handle click
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPage;