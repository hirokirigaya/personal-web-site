import { useLayoutEffect, useRef } from "react";
import { Card } from "../../components/reusable/card";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

const Home = (): JSX.Element => {
  let Idade = new Date().getFullYear() - new Date("2002-07-19").getFullYear();
  let ProgamationTime =
    new Date().getMonth() - new Date("2020-01-25").getMonth();
  const title = useRef<HTMLDivElement>(null);
  const cardFirst = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    let windowPosition = window.scrollY;
  });

  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      ScrollReveal().reveal(title.current!, {
        duration: 1000,
        delay: 100,
        easing: "ease-in-out",
        reset: false,
        origin: "top",
        distance: "10px",
      });
      ScrollReveal().reveal(cardFirst.current!, {
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: false,
        origin: "top",
        distance: "20px",
      });
    });
  }, [title.current]);

  return (
    <Styled.Container>
      <Styled.FirstSection>
        <div className="container-main-first">
          <div className="title-first-section" ref={title}>
            <h1>
              <span>Daniel Ferreira</span>
              <br />
              Desenvolvedor <br />
              Front End
            </h1>
          </div>
          <Card boxShadow={"1rem 1rem 0rem #FFC700"} ref={cardFirst}>
            <div className="infos">
              <p className="about-me">
                Olá possuo {Idade} anos e desenvolvo aplicações Web há{" "}
                {ProgamationTime} meses, sempre visando a melhor experiência
                para os usuários.
              </p>

              <div className="navgation-personal-web">
                <p>
                  Navegue pelo portfolio para conhecer mais <br /> sobre meu
                  trabalho
                </p>
                <Link to="/" className="next-section">
                  <FiArrowDown />
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div className="icons-networks">
          <a href="https://github.com/hirokirigaya" target="_blank">
            <FiGithub />
          </a>
          <a href="/" target="_blank">
            <FiYoutube />
          </a>
          <a href="mailto:danielferreiradeveloper@gmail.com">
            <FiMail />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-junio-0832481bb/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
      </Styled.FirstSection>
      <Styled.SecondSection>
        <div className="header-second-section">
          <p>Projetos</p>
          <h2>Projetos Recentes</h2>
        </div>
        <div className="recent-projects">
          <Card boxShadow={"1rem 1rem 0rem #FF2C52"}>
            <div className="box-project">
              primeiro
            </div>
          </Card>
          <Card boxShadow={"1rem 1rem 0rem #1472FF"}>
            <div className="box-project">
              segundo
            </div>
          </Card>
        </div>
      </Styled.SecondSection>
    </Styled.Container>
  );
};

export { Home };
