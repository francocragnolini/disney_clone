import styled from "styled-components";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <Right>
        Copyright 2021 f.c Web Development Inc. All Rights Reserved{" "}
        <FaCopyright />
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #090b13;
`;
const Right = styled.div`
  width: 100%;
  font-weight: semi-bold;
  text-align: center;
`;
