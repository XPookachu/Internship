import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/styles/NavBar.css";

const NavBar = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCategory(category);
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt="News Logo"
      />
      <div className="options">
        <button
          onClick={() => handleCategoryClick("business")}
          className={selectedCategory === "business" ? "selected" : ""}
        >
          Business
        </button>
        <button
          onClick={() => handleCategoryClick("entertainment")}
          className={selectedCategory === "entertainment" ? "selected" : ""}
        >
          Entertainment
        </button>
        <button
          onClick={() => handleCategoryClick("general")}
          className={selectedCategory === "general" ? "selected" : ""}
        >
          General
        </button>
        <button
          onClick={() => handleCategoryClick("health")}
          className={selectedCategory === "health" ? "selected" : ""}
        >
          Health
        </button>
        <button
          onClick={() => handleCategoryClick("science")}
          className={selectedCategory === "science" ? "selected" : ""}
        >
          Science
        </button>
        <button
          onClick={() => handleCategoryClick("sports")}
          className={selectedCategory === "sports" ? "selected" : ""}
        >
          Sports
        </button>
        <button
          onClick={() => handleCategoryClick("technology")}
          className={selectedCategory === "technology" ? "selected" : ""}
        >
          Technology
        </button>
      </div>
    </div>
  );
};

export default NavBar;