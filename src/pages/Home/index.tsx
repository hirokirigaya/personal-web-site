import { useEffect, useRef } from "react";
import { Card } from "../../components/reusable/card";
import {
  FiArrowDown,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";
import * as Styled from "./styles";
import ScrollReveal from "scrollreveal";
import { ContainerInfosHeader } from "../../components/reusable/containerInfos";
import moment from "moment";
import "moment/dist/locale/pt-br";
moment.locale("pt-br");

const startedProgamation = "2022-01-25";

const Home = (): JSX.Element => {
  const age = moment().diff("2002-07-18", "years");
  const progamationDate = moment()
    .diff(startedProgamation, "years", true)
    .toFixed(1);
  const programationTimeYears = progamationDate.split(".")[0];
  const programationTimeMonths = progamationDate.split(".")[1];
  const progamationTime = `${
    Number(programationTimeYears) > 1
      ? `${programationTimeYears} anos`
      : `${programationTimeYears} ano`
  } e ${
    Number(programationTimeMonths) > 1
      ? `${programationTimeMonths} meses`
      : `${programationTimeMonths} mês`
  }`;
  const title = useRef<HTMLDivElement>(null);
  const cardFirst = useRef<HTMLDivElement>(null);
  const titleSecondSection = useRef<HTMLDivElement>(null);
  const titleThirdSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateWorksContainer = async () => {
      if (titleSecondSection.current) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(titleSecondSection.current, {
          duration: 1000,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
        });
        scrollReveal().reveal(".card1-second-section", {
          duration: 1000,
          delay: 500,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(".card2-second-section", {
          duration: 1100,
          delay: 900,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(titleThirdSection.current!, {
          duration: 1000,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
        });
        scrollReveal().reveal(".about-me", {
          duration: 1000,
          delay: 500,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(".more-projects", {
          duration: 1200,
          delay: 1000,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
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
        ScrollReveal().reveal(".icons-networks", {
          duration: 1000,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
          origin: "top",
          distance: "20px",
        });
      }
    };
    animateWorksContainer();
  }, []);

  return (
    <Styled.Container>
      <Styled.FirstSection>
        <div className="container-main-first">
          <div className="title-first-section" ref={title}>
            <h1>
              <span>Daniel Ferreira</span>
              <br />
              Desenvolvedor <br />
              de Software
            </h1>
          </div>
          <Card boxShadow={"1rem 1rem 0rem #FFC700"} ref={cardFirst}>
            <div className="infos">
              <p className="about-me">
                Olá possuo {age} anos e sou desenvolvedor há {progamationTime},
                trabalhando diretamente em fábricas de software, tendo
                experiência em desenvolvimento web e mobile, sempre visando a
                melhor experiência para os usuários.
              </p>

              <div className="navgation-personal-web">
                <p>
                  Navegue pelo portfolio para conhecer mais <br /> sobre meu
                  trabalho
                </p>
                <a href="#projetos" className="next-section">
                  <FiArrowDown />
                </a>
              </div>
            </div>
          </Card>
        </div>
        <div className="icons-networks">
          <a
            href="https://github.com/hirokirigaya"
            target="_blank"
            title="Github"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.youtube.com/channel/UCGanhUB_aetD16UBbUJ9n6g"
            target="_blank"
            title="Youtube"
          >
            <FiYoutube />
          </a>
          <a href="mailto:danielferreiradeveloper@gmail.com" title="E-mail">
            <FiMail />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-junio-0832481bb/"
            target="_blank"
            title="Linkedin"
          >
            <FiLinkedin />
          </a>
        </div>
      </Styled.FirstSection>
      <Styled.SecondSection>
        <ContainerInfosHeader ref={titleSecondSection} id="projetos">
          <p>Projetos</p>
          <h2>Projetos Recentes</h2>
        </ContainerInfosHeader>
        <div className="recent-projects">
          <Card
            boxShadow={"1rem 1rem 0rem #FF2C52"}
            className="card1-second-section"
          >
            <div className="box-project">
              <div className="item">
                <div className="content">
                  <p className="title-project">Github Finder</p>
                  <p className="desc-project">
                    Página web onde é possivel pesquisar usuários do github e
                    ver seus dados e repósitorios. Densevolvido em React JS +
                    Styled Components. Clique aqui para ver o{" "}
                    <a
                      href="https://github.com/hirokirigaya/githubfinder"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Repositório do projeto"
                      className="link-repo"
                    >
                      repositório
                    </a>
                  </p>
                </div>
                <div className="link-website">
                  <a
                    href={"https://githubfinder-five.vercel.app/"}
                    target="_blank"
                    title="Acessar site do projeto Github Finder"
                    rel="noopener noreferrer"
                  >
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Card>
          <Card
            boxShadow={"1rem 1rem 0rem #1472FF"}
            className="card2-second-section"
          >
            <div className="box-project">
              <div className="item">
                <div className="content">
                  <p className="title-project">Sneakers V2</p>
                  <p className="desc-project">
                    Página Web, e-ccomerce de tênis, sendo um dos primeiros
                    sites que desenvolvi o backend. Densevolvido em Next JS +
                    Styled Components + Typescrpit. Clique aqui para ver o{" "}
                    <a
                      href="https://github.com/hirokirigaya/sneakers-v2"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Repositório do projeto"
                      className="link-repo"
                    >
                      repositório
                    </a>
                  </p>
                </div>
                <div className="link-website">
                  <a
                    href={"https://sneakers-v2.vercel.app/"}
                    target="_blank"
                    title="Acessar site do projeto Sneakers V2"
                    rel="noopener noreferrer"
                  >
                    <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="more-projects">
          <a href="/projetos">
            <p>Mais</p> <FiArrowRight />
          </a>
        </div>
      </Styled.SecondSection>
      <Styled.ThirdSection>
        <ContainerInfosHeader ref={titleThirdSection}>
          <p>Sobre</p>
          <h2>Quem sou?</h2>
        </ContainerInfosHeader>

        <div className="about-me">
          <p>
            Meu nome é Daniel Ferreira, tenho {age} anos, nascido em Brasília,
            desde pequeno sempre tive uma imensa paixão por tecnologia,
            principalmente informática e robótica, ao conhecer o desenvolvimento
            web, pesquisando e aprendendo mais sobre, acabou se tornando minha
            nova paixão, pois o fato de poder programar algo do zero, que pode
            ser utilizado para ajudar pessoas e automatizar processos como
            resultado final é algo muito satisfatório e prazeroso. Além disso,
            busco usar meus conhecimentos para ajudar o próximo, auxiliando os
            programadores em comunidades e compartilhando conhecimento no meu
            canal do youtube{" "}
            <a
              href="https://www.youtube.com/channel/UCGanhUB_aetD16UBbUJ9n6g"
              title="Canal do Youtube"
            >
              Daniel Ferreira
            </a>
            .
          </p>
          <p>
            Atualmente sou desenvolvedor web e mobile, especialista front end e
            estou cursando o 4° semestre de Análise e Desenvolvimento de
            Sistemas na Universidade Anhanguera. Tenho como objetivo me tornar
            um desenvolvedor full stack, estou sempre buscando novos
            conhecimentos para alcançar o que almejo. No momento desenvolvo em
            Javascript/TS; como principal framework web utilizo ReactJS/NextJS;
            mobile React Native; no desenvolvimento back-end utilizo NodeJS e
            venho estudando Java buscando me especializar cada vez mais. Clique
            aqui para baixar meu{" "}
            <a
              href="/daniel_curriculo.pdf"
              title="Currículo Daniel Ferreira"
              download
            >
              currículo
            </a>
            .
          </p>
        </div>
      </Styled.ThirdSection>
    </Styled.Container>
  );
};

export { Home };
