import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.8;
  }
`;
const CTA = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 1.7rem 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  width: 90%;
`;
