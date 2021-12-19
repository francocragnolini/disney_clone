import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="viewers" />
        <video className="video" autoPlay={true} loop>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="viewers" />
        <video className="video" autoPlay={true} loop>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="viewers" />
        <video className="video" autoPlay={true} loop>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="viewers" />
        <video className="video" autoPlay={true} loop>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="viewers" />
        <video className="video" autoPlay={true} loop>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;

const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 3rem 0 2.6rem;
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 2px solid rgba(249, 249, 249, 0.1);
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .video {
    display: none;
    width: 100%;
    height: 100%;
    line-height: 0;
    border-radius: 1rem;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    img {
      display: none;
    }
    .video {
      display: block;
    }
  }
`;
