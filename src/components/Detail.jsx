import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../services/tmdb";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
  // setting a state to save the movie obj
  const [movie, setMovie] = useState("");

  // grab id from route(detail/:id)
  const { id } = useParams();
  console.log(id);

  // getting the movie from the database
  useEffect(() => {
    const getMovieById = async () => {
      const res = await getSingleMovie(id);
      setMovie(res);
    };
    getMovieById();
  }, []);
  console.log(movie);
  return (
    <Container>
      {/* to prevent the delay from useEffect */}
      {movie && (
        <>
          <Background>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
          </Background>
          <Info>
            <Title>{movie.title}</Title>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="play movie" />
                <span>Play</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="play trailer" />
                <span>Trailer</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="group" />
              </GroupWatchButton>
            </Controls>
            <SubTitle></SubTitle>
            <Description>{movie.overview}</Description>
          </Info>
        </>
      )}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 5rem calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Info = styled.div`
  margin-top: 20rem;
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  height: 5.6rem;
  border: none;
  background-color: rgb(249, 249, 249);
  padding: 0 2.4rem;
  margin-right: 2.2rem;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 3rem;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1.5rem;
  min-height: 2rem;
  margin-top: 2.6rem;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  margin-top: 1.6rem;
  max-width: 70rem;
`;
