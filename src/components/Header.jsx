import styled from "styled-components";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // grab username and email
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {/* if username=== null show login component else => render the full navbar */}
      <Login>Login</Login>
      <NavMenu>
        <Link to="/" className="link">
          <img src="/images/home-icon.svg" alt="home-icon" />
          <span>HOME</span>
        </Link>
        <Link to="/" className="link">
          <img src="/images/search-icon.svg" alt="search-icon" />
          <span>SEARCH</span>
        </Link>
        <Link to="/" className="link">
          <img src="/images/watchlist-icon.svg" alt="home-icon" />
          <span>WATCHLIST</span>
        </Link>
        <Link to="/" className="link">
          <img src="/images/original-icon.svg" alt="home-icon" />
          <span>ORIGINALS</span>
        </Link>
        <Link to="/movies" className="link">
          <img src="/images/movie-icon.svg" alt="home-icon" />
          <span>MOVIES</span>
        </Link>
        <Link to="/" className="link">
          <img src="/images/series-icon.svg" alt="home-icon" />
          <span>SERIES</span>
        </Link>
      </NavMenu>
      <UserImg src="/images/california.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  width: 100%;
  position: fixed;
  z-index: 5;
  overflow-x: hidden;
  height: 7rem;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  // margin-left: 2rem;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 2rem;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      color: #fff;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.button`
  display: none;
  border: 1px solid #f9f9f9;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
