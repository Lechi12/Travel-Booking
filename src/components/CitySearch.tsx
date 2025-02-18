import React, { useState } from "react";

const CitySearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  // Simulating a list of cities
  const cities = [
    { name: "New York" },
    { name: "Los Angeles" },
    { name: "Chicago" },
    { name: "San Francisco" },
    { name: "Miami" },
  ];

  // Filter cities based on the search query
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update search query state
    console.log(e.target.value); // This will log the search query as you type
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search cities"
      />
      <div>
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => <p key={index}>{city.name}</p>)
        ) : (
          <p>No cities found</p>
        )}
      </div>
    </div>
  );
};

export default CitySearch;
