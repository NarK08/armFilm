import React, { useEffect } from "react";
import { Movies } from "../movie/Movies";
import Search from "../search/Search";
import { Preloader } from "./Preloader";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setMovies } from "../store/actions";
import { movies, loading } from "../store/selector";

// const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const dispatch = useDispatch();
  const movie = useSelector(movies);
  const load = useSelector(loading);

  const searchMovies = (str, type = "all") => {
    dispatch(setLoading(true));
    fetch(
      `https://www.omdbapi.com/?apikey=5fc28f00&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setLoading(false));

        dispatch(setMovies(data.Search));
      })
      .catch((err) => {
        console.error(err);
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=5fc28f00&s=2022`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMovies(data.Search));

        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.error(err);

        dispatch(setLoading(false));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {load ? <Preloader /> : <Movies movies={movie} />}
    </main>
  );
};

export { Main };
