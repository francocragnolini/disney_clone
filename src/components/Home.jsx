import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import ListItem from "./ListItem";
import Viewers from "./Viewers";
// import { getPopularMovies } from "../services/tmdb";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  // const dispatch = useDispatch();

  // // getting popular movies
  // useEffect(() => {
  //   const loadPopular = async () => {
  //     const response = await getPopularMovies();

  //     // use redux to store the data from tmdb to save it in the store
  //     dispatch(setMovies(response));
  //   };
  //   loadPopular();
  // }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <ListItem />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  padding: 0 calc(3.5vw + 5px);
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
