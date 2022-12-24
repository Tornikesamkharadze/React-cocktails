import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchBar, setSearchBar] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${url}${searchBar}`);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((itemInfo) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = itemInfo;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
    
          };
        });
        setCocktails(newCocktails)
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchBar]);
  return (
    <AppContext.Provider value={{ loading, searchBar, cocktails, setSearchBar }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
