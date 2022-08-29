import { Card } from "../../components/reusable/card";
import { FiArrowDown } from "react-icons/fi";
import * as Styled from "./styles";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  let Idade = new Date().getFullYear() - new Date("2002-07-19").getFullYear();
  let ProgamationTime =
    new Date().getMonth() - new Date("2020-01-25").getMonth();

  return (
    <Styled.Container>
      <Styled.FirstSection>
        <div className="title-first-section">
          <h1>
            <span>Daniel Ferreira</span>
            <br />
            Desenvolvedor <br />
            Front End
          </h1>
        </div>
        <Card boxShadow={"1rem 1rem 0rem #FFC700"}>
          <div className="infos">
            <p className="about-me">
              Olá possuo {Idade} anos e desenvolvo aplicações Web há{" "}
              {ProgamationTime} meses, sempre visando a melhor experiência para
              os usuários.
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
      </Styled.FirstSection>
    </Styled.Container>
  );
};

export { Home };
