import { ContainerError } from "../../components/reusable/containerInfos";
import { Error404 } from "../../components/reusable/Error404";
import * as Styled from "./styles";

const Blog = () => {
  return (
    <ContainerError>
      <Styled.Container>
        <Error404 />
        <h1>Em breve</h1>
      </Styled.Container>
    </ContainerError>
  );
};

export { Blog };
