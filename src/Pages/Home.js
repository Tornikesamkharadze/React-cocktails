import React from "react";
import { useGlobalContext } from "../Components/context";
import SearchForm from "../Components/SearchForm";
import CocktailList from "../Components/CocktailList";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
