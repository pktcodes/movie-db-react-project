import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
