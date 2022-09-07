import { ContainerError } from "../../components/reusable/containerInfos";
import { Error404 } from "../../components/reusable/Error404";
import * as Styled from "./styles";

const Page404 = () => {
  return (
    <ContainerError>
      <Styled.Container>
        <Error404 />
        <h1>Pagina não encontrada</h1>
      </Styled.Container>
    </ContainerError>
  );
};

export { Page404 };
