import { useRef } from "react";
import { Navbar } from "./Navbar";
import * as Styled from "./styles";

const Header = (): JSX.Element => {
  const header = useRef<HTMLDivElement>(null);

  return (
    <>
      <Styled.Container ref={header!}>
        <Navbar />
      </Styled.Container>
    </>
  );
};

export { Header };
