import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";
import * as Styled from "./styles";

const Header = (): JSX.Element => {
  const header = useRef<HTMLDivElement>(null);

  window.addEventListener("scroll", () => {
    let windowPosition = window.scrollY;
  });

  return (
    <>
      <Styled.Container ref={header!}>
        <Navbar />
      </Styled.Container>
    </>
  );
};

export { Header };
