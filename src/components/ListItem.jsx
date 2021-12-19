import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

const ListItem = () => {
  // grab movies from redux store
  const movies = useSelector(selectMovies);
  console.log("this is movies", movies);
  return (
    <Container>
      <h4>Popular Movies</h4>
      <Content>
        {/* if movies exists then map the array */}
        {movies &&
          movies.map((item) => (
            <Item key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                />
              </Link>
            </Item>
          ))}
      </Content>
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  padding: 2rem 0 6rem;
  h4 {
    font-size: 2.5rem;
    padding: 2rem 0;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Item = styled.div`
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
