import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("batma");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === "True") {
        setMovies(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, error, query, movies, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
