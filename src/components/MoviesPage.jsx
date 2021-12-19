import styled from "styled-components";
import ListItem from "./ListItem";

const MoviesPage = () => {
  return (
    <Container>
      <ListItem />
    </Container>
  );
};

export default MoviesPage;

const Container = styled.div`
  padding: 0 calc(3.5vw + 5px);
`;
