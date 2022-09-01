import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const activeLink = window.location.pathname;
  function animateLinks() {
    const navbarLinks = document.querySelectorAll<HTMLElement>(
      ".container-links .navbar-link"
    );

    navbarLinks.forEach((item, index) => {
      item.style.animation
        ? (item.style.animation = "")
        : (item.style.animation = `navLinkAnimation ${
            index / 3 + 0.5
          }s ease forwards ${index / 3 + 0.3}s`);
    });
  }
  const handleClickToggleMenu = (): void => {
    setOpen(!open);
    animateLinks();
  };

  return (
    <>
      <Styled.Container>
        <h1>
          <Link to="/">DAN</Link>
        </h1>
        <Styled.ButtonNav onClick={handleClickToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Styled.ButtonNav>
      </Styled.Container>
      <Styled.ContainerNavgation className={open ? "active" : ""}>
        <ul className="container-links">
          {navLinks.map((item) => {
            return (
              <li
                key={item.id}
                onClick={handleClickToggleMenu}
                className={
                  activeLink === item.path ? "navbar-link on" : "navbar-link"
                }
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </Styled.ContainerNavgation>
    </>
  );
};

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Projetos",
    path: "/projetos",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    name: "Contato",
    path: "#contato",
  },
];

export { Navbar };
