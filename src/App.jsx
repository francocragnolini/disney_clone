import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { getPopularMovies } from "./services/tmdb";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "./features/movie/movieSlice";
import MoviesPage from "./components/MoviesPage";

function App() {
  const dispatch = useDispatch();

  // getting popular movies
  useEffect(() => {
    const loadPopular = async () => {
      const response = await getPopularMovies();

      // use redux to store the data from tmdb to save it in the store
      dispatch(setMovies(response));
    };
    loadPopular();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
