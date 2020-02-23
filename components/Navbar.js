import Link from "../components/Link";
import styled from "styled-components";

const Navbar = ({ className, theme }) => (
  <Nav className={className} theme={theme}>
    <ul className="nav-list">
      <Link activeClassName="nav-active" href="/">
        <NavItem theme={theme}>
          <a>Home</a>
        </NavItem>
      </Link>
      <Link activeClassName="nav-active" href="/work">
        <NavItem theme={theme}>
          <a>Work</a>
        </NavItem>
      </Link>
      <Link activeClassName="nav-active" href="/resume">
        <NavItem theme={theme}>
          <a>Resume</a>
        </NavItem>
      </Link>
      <Link activeClassName="nav-active" href="/contact">
        <NavItem theme={theme}>
          <a>Contact</a>
        </NavItem>
      </Link>
    </ul>
    <h2 className="title">KAUSTUBH SINGH</h2>
  </Nav>
);

const Nav = styled.nav`
  color: ${({ theme }) => (theme === "dark" ? "#111" : "#fff")};
`;

const NavItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  color: ${({ theme }) => (theme === "dark" ? "#8a8a8a" : "#fff")};
  :hover,
  .active {
    border-bottom: 1px solid
      ${({ theme }) => (theme === "dark" ? "#333" : "#ddd")};
    color: ${({ theme }) => (theme === "dark" ? "#222" : "#eee")};
  }
`;

export default styled(Navbar)`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  .nav-list {
    flex: 0 0 30%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .title {
    flex: 1;
    margin: 0;
    padding: 0;
    text-align: right;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    .title {
      display: none;
    }
  }
`;
