import moment from "moment";
import { useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Card } from "../../components/reusable/card";
import { ContainerInfosHeader } from "../../components/reusable/containerInfos";
import { Slider } from "../../components/reusable/Slider";
import { GithubRepositoryInterface } from "../../interfaces/GithubRepository";
import GithubService from "../../services/GithubService";
import { dataSlider } from "./dataSlider";
import * as Styled from "./styles";

const Projects = (): JSX.Element => {
  const [repositories, setRepositories] = useState<GithubRepositoryInterface[]>(
    []
  );
  const [colors, setColors] = useState<string[]>([]);
  const titleFistSection = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const titleSecondSection = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const cores = ["#2DBEBB", "#36a3fc", "#caebd9"];
  const length = 2;

  const changeSlide = () => {
    if (current === length) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  setTimeout(changeSlide, 5000);

  const getAllRepos = async () => {
    const data = await GithubService.getAllRepositories();
    return setRepositories(data.data);
  };

  let totalPages = 0;
  let maxItensPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  totalPages = Math.ceil(repositories.length / maxItensPerPage);
  let repositoriesList = repositories.slice(
    (currentPage - 1) * maxItensPerPage,
    currentPage * maxItensPerPage
  );

  const prevPagePagination = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPagePagination = () => {
    if (currentPage === totalPages) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getAllRepos();

    const animateWorksContainer = async () => {
      if (titleFistSection.current) {
        const scrollReveal = (await import("scrollreveal")).default;

        scrollReveal().reveal(titleFistSection.current, {
          duration: 1000,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
          distance: "20px",
          origin: "top",
        });
        scrollReveal().reveal(slider.current!, {
          duration: 1000,
          delay: 500,
          easing: "ease-in-out",
          reset: false,
          distance: "20px",
          origin: "top",
        });

        scrollReveal().reveal(titleSecondSection.current!, {
          duration: 1100,
          delay: 700,
          easing: "ease-in-out",
          reset: false,
          distance: "20px",
          origin: "bottom",
        });
        scrollReveal().reveal(".container-repositories", {
          duration: 1100,
          delay: 900,
          easing: "ease-in-out",
          reset: false,
          distance: "20px",
          origin: "bottom",
        });
        scrollReveal().reveal(".paginate", {
          duration: 1100,
          delay: 1000,
          easing: "ease-in-out",
          reset: false,
          distance: "20px",
          origin: "bottom",
        });
      }
    };

    animateWorksContainer();
  }, []);

  useEffect(() => {
    let provisoryColors: string[] = [];
    repositoriesList.map(() => {
      provisoryColors.push(getColor());
    });
    setColors(provisoryColors);
  }, [repositories]);

  const getColor = () => {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (25 + 70 * Math.random()) +
      "%," +
      (85 + 10 * Math.random()) +
      "%)"
    );
  };

  return (
    <Styled.Container>
      <Styled.FirstSection>
        <div className="title-first-section" ref={titleFistSection}>
          <Styled.TitleFirstSection color={cores[current]}>
            Projetos
          </Styled.TitleFirstSection>
        </div>
        <div ref={slider}>
          <Slider data={dataSlider} cores={cores} />
        </div>
      </Styled.FirstSection>
      <Styled.SecondSection>
        <ContainerInfosHeader ref={titleSecondSection}>
          <p>Repositórios</p>
          <h2>Github</h2>
        </ContainerInfosHeader>
        <div className="box-repositories">
          <div className="container-repositories">
            {repositoriesList.map((repository, index) => (
              <Card
                width={"100%"}
                minHeight={"100px"}
                boxShadow={`1rem 1rem 0rem ${colors[index]}`}
                key={repository.id}
                padding={"1rem"}
              >
                <div className="content-box">
                  <p>{repository.name}</p>
                  <div className="data-repository">
                    <p>{moment(repository.created_at).format("DD/MM/YYYY")}</p>
                    <a
                      href={repository.html_url}
                      target="_blank"
                      title={`Acessar repositório do projeto ${repository.name}`}
                    >
                      <FiArrowRight />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="paginate">
            <button onClick={prevPagePagination} title="Voltar página">
              <FiChevronLeft />
            </button>
            <p title={`Página ${currentPage} de páginas ${totalPages} totais`}>
              {currentPage} de {totalPages}
            </p>
            <button onClick={nextPagePagination} title="Avançar página">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </Styled.SecondSection>
    </Styled.Container>
  );
};

export { Projects };
