import { useEffect, useRef, useState } from "react";
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
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { GithubRepositoryInterface } from "../../interfaces/GithubRepository";
import GitHubService from "../../services/GithubService";
import { ContainerInfosHeader } from "../../components/reusable/containerInfos";

const Home = (): JSX.Element => {
  let Idade = new Date().getFullYear() - new Date("2002-07-19").getFullYear();
  let ProgamationTime =
    new Date().getMonth() - new Date("2020-01-25").getMonth();
  const title = useRef<HTMLDivElement>(null);
  const cardFirst = useRef<HTMLDivElement>(null);
  const titleSecondSection = useRef<HTMLDivElement>(null);
  const titleThirdSection = useRef<HTMLDivElement>(null);
  const [repositories, setRepositories] = useState<GithubRepositoryInterface[]>(
    []
  );

  const getAllRepos = async () => {
    const data = await GitHubService.getAllRepositories();
    return setRepositories(data.data);
  };

  useEffect(() => {
    getAllRepos();
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

  const githubFinder = repositories.filter(
    (item) => item.name === "githubfinder"
  );
  const financialControl = repositories.filter(
    (item) => item.name === "FinancialControl"
  );

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
                <a href="#projetos" className="next-section">
                  <FiArrowDown />
                </a>
              </div>
            </div>
          </Card>
        </div>
        <div className="icons-networks">
          <a href="https://github.com/hirokirigaya" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.youtube.com/channel/UCGanhUB_aetD16UBbUJ9n6g" target="_blank">
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
        <ContainerInfosHeader
          ref={titleSecondSection}
          id="projetos"
        >
          <p>Projetos</p>
          <h2>Projetos Recentes</h2>
        </ContainerInfosHeader>
        <div className="recent-projects">
          <Card
            boxShadow={"1rem 1rem 0rem #FF2C52"}
            className="card1-second-section"
          >
            <div className="box-project">
              {githubFinder &&
                githubFinder.map((item) => (
                  <div key={item.id} className="item">
                    <div className="content" >
                      <p className="title-project">Github Finder</p>
                      <p className="desc-project">
                        Página web onde é possivel pesquisar usuários do github
                        e ver seus dados e repósitorios. Denvolvido em React JS
                        + Styled Components.
                      </p>
                    </div>
                    <div className="link-repo">
                      <a href={item.html_url} target="_blank">
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
          <Card
            boxShadow={"1rem 1rem 0rem #1472FF"}
            className="card2-second-section"
          >
            <div className="box-project">
              {financialControl &&
                financialControl.map((item) => (
                  <div key={item.id} className="item">
                    <div className="content">
                      <p className="title-project">Financial Control</p>
                      <p className="desc-project">
                        Página web onde é possivel cadastrar despesas e
                        receitas, e efetuar o controle financeiro. Denvolvido em
                        Next JS + Styled Components + Typescrpit.
                      </p>
                    </div>
                    <div className="link-repo" >
                      <a href={item.html_url} target="_blank">
                        <FiArrowRight />
                      </a>
                    </div>
                  </div>
                ))}
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
        <ContainerInfosHeader
          ref={titleThirdSection}
        >
          <p>Sobre</p>
          <h2>Quem sou?</h2>
        </ContainerInfosHeader>

        <div className="about-me">
          <p>
            Meu nome é Daniel Ferreira, tenho {Idade} anos, nascido em Brasilia, desde pequeno sempre tive uma imensa paixão por tecnologia, principalmente informática e robótica, ao conhecer o desenvolvimento web resolvi pesquisar e aprender mais sobre, e acabou se tornando minha nova paixão, pois o fato de poder programar algo do zero e ver o resultado final é algo que me deixa muito feliz. Além de usar meus conhecimentos para ajudar o próximo venho buscado ajudar os programadores nas comunidades e no meu canal do youtube <a href="https://www.youtube.com/channel/UCGanhUB_aetD16UBbUJ9n6g">Daniel Ferreira</a>.
          </p>
          <p>
            Atualmente sou desenvolvedor web front end e estou cursando o 2° semestre de Análise e Desenvolvimento de Sistemas na Universidade Anhanguera. Tenho como objetivo me tornar um desenvolvedor full stack, e estou sempre buscando novos conhecimentos para alcançar o que almejo. Atualmente desenvolvo em Javascript/TS e como principal framework utilizo React JS, tenhos conhecimentos em estilizadores css, scss, styled-components, desenvolvimento de interfaces, mobile first, responsividade, consumo de api's, git, github, entre outros.
          </p>
        </div>
      </Styled.ThirdSection>
    </Styled.Container>
  );
};

export { Home };
