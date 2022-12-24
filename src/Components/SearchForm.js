import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { setSearchBar } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchBar(searchValue.current.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
