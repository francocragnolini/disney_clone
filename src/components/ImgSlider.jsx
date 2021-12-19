import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/tmdb";
import { Link } from "react-router-dom";

const ImgSlider = () => {
  // settings slider react-slick library
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // states
  const [trendingMovies, setTrendingMovies] = useState([]);

  // getting trending movies
  useEffect(() => {
    const loadTrending = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    };
    loadTrending();
  }, []);

  const moviesArray = trendingMovies.slice(10, 16);
  return (
    <Carousel {...settings}>
      {moviesArray.map((item) => (
        <Wrap key={item.id}>
          <Link to={`/detail/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt={item.title}
            />
          </Link>
        </Wrap>
      ))}
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 7rem;
  ul li button {
    &:before {
      font-size: 1rem;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: #fff;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  height: 45rem;
  img {
    width: 100%;
    height: 100%;
    border: 4px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
