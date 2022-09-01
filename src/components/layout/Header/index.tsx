import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";
import * as Styled from "./styles";

const Header = (): JSX.Element => {
  const [windowScroll, setWindowScroll] = useState(0);
  const header = useRef<any>();

  useEffect(() => {
    setWindowScroll(window.scrollY)
  }, [window.scrollY])

  return (
    <Styled.Container ref={header}>
      <Navbar />
    </Styled.Container>
  );
};

export { Header };