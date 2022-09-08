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
        : (item.style.animation = `openAnimation ${
            index / 3 + 0.5
          }s ease forwards ${index / 3 + 0.3}s`);
    });
  }
  const handleClickToggleMenu = (): void => {
    setOpen(!open);
    animateLinks();
  };

  const handleScrollToTop = () => {
    setOpen(!open);
    animateLinks();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Styled.Container>
        <h1>
          <a href="/">DAN</a>
        </h1>
        <Styled.ButtonNav onClick={handleClickToggleMenu} tabIndex={2}>
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
                onClick={handleScrollToTop}
                className={
                  activeLink === item.path ? "navbar-link on" : "navbar-link"
                }
              >
                {item.name === "Contato" ? (
                  <a href={item.path} key={item.id}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} key={item.id}>
                    {item.name}
                  </Link>
                )}
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
