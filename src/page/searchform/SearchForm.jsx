import React, { useState } from "react";

export default function SearchForm({ onSearch, allTickets }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, fetch all tickets
      onSearch(allTickets);
    } else {
      // Otherwise, perform the search
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Recherche..."
            className="border p-2 rounded focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
          />
        </div>
      </div>
    </div>
  );
}
