import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchValue(searchValue);
    if (!searchValue) return;
  };

  return (
    <section>
      <h1 className="title"> unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button type="submit" className="btn ">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
